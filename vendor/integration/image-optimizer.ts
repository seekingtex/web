import type { AstroIntegration } from 'astro';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function imageOptimizer(): AstroIntegration {
  let outDir: string;

  return {
    name: 'image-optimizer',
    hooks: {
      'astro:config:done': ({ config }) => {
        const raw = config.outDir?.pathname || '/dist/';
        const platformPath = raw.startsWith('/') && process.platform === 'win32' ? raw.slice(1) : raw;
        outDir = path.resolve(platformPath, 'client');
      },
      'astro:build:done': async () => {
        // outDir is already dist/client/ (resolved during config:done)
        const imagesDir = path.join(outDir, 'images', 'seekingtex');
        if (!fs.existsSync(imagesDir)) {
          console.log(`[image-optimizer] No images directory found (${imagesDir})`);
          return;
        }

        const rootDir = path.resolve(__dirname, '../..');
        const scriptPath = path.join(rootDir, 'scripts', 'optimize-images-worker.mjs');
        try {
          const output = execSync(`node "${scriptPath}" "${outDir}"`, { encoding: 'utf-8', timeout: 60000 });
          console.log(output.trim());
        } catch (err) {
          const e = err as { message?: string; stdout?: string; stderr?: string };
          console.error(`[image-optimizer] Failed: ${e.message}`);
          if (e.stdout) console.log(e.stdout);
          if (e.stderr) console.error(e.stderr);
        }
      },
    },
  };
}
