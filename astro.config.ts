import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import type { Plugin } from 'vite';

import { unified } from '@astrojs/markdown-remark';
import yaml from 'js-yaml';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';
import type { AstroIntegration } from 'astro';
import { sessionDrivers } from 'astro/config';
import astrowind from './vendor/integration';
import imageOptimizer from './vendor/integration/image-optimizer';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const locale = process.env.SITE_LOCALE || 'en';

function yamlPlugin(): Plugin {
  return {
    name: 'inline-yaml-loader',
    enforce: 'pre',
    async load(id) {
      if (!id.endsWith('.yaml') && !id.endsWith('.yml')) return null;
      const clean = id.split('?')[0];
      if (locale !== 'en') {
        const pagesMatch = clean.match(/[/\\]data[/\\]pages[/\\](.+\.ya?ml)$/);
        if (pagesMatch) {
          const localePath = clean.replace(/[/\\]pages[/\\]/, `/pages/${locale}/`);
          try {
            await fs.access(localePath);
            const content = await fs.readFile(localePath, 'utf8');
            const data = yaml.load(content);
            return { code: `export default ${JSON.stringify(data)};`, map: null };
          } catch {
            // locale file not found, fall back to English
          }
        }
      }
      const content = await fs.readFile(clean, 'utf8');
      const data = yaml.load(content);
      return {
        code: `export default ${JSON.stringify(data)};`,
        map: null,
      };
    },
  };
}

function pageContentPlugin(): Plugin {
  return {
    name: 'page-content-loader',
    resolveId(id) {
      if (id === 'astro:page-content') return '\0astro:page-content';
      return null;
    },
    async load(id) {
      if (id !== '\0astro:page-content') return null;
      const pagesDir = path.resolve(__dirname, 'src/data/pages');
      const langsYamlPath = path.resolve(__dirname, 'src/data/site/languages.yaml');

      // Discover enabled languages from languages.yaml
      let pageLangs: string[];
      try {
        const langsContent = await fs.readFile(langsYamlPath, 'utf8');
        const langsData = yaml.load(langsContent) as Array<{ locale: string; enabled: boolean }>;
        pageLangs = langsData.filter((l) => l.enabled !== false).map((l) => l.locale);
      } catch {
        pageLangs = ['en'];
      }

      // Discover page YAML filenames from the pages directory
      let pageNames: string[];
      try {
        const entries = await fs.readdir(pagesDir);
        pageNames = entries
          .filter((e) => e.endsWith('.yaml'))
          .map((e) => e.replace(/\.yaml$/, ''));
      } catch {
        pageNames = [];
      }

      const data: Record<string, any> = {};
      for (const lang of pageLangs) {
        for (const pname of pageNames) {
          const filePath =
            lang === 'en' ? path.resolve(pagesDir, `${pname}.yaml`) : path.resolve(pagesDir, lang, `${pname}.yaml`);
          try {
            const content = await fs.readFile(filePath, 'utf8');
            data[`${lang}/${pname}`] = yaml.load(content);
          } catch {
            // file not found, skip
          }
        }
      }
      return { code: `export default ${JSON.stringify(data)};`, map: null };
    },
  };
}

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

const configFile = locale === 'en' ? './src/config.yaml' : `./src/config.${locale}.yaml`;

export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    remoteBindings: process.env.CI ? false : undefined,
    imageService: 'passthrough',
  }),

  session: {
    driver: sessionDrivers.memory(),
    ttl: 86400,
  },

  integrations: [
    sitemap({
      filter: (page) => !/\/(keystatic|admin|login|api|404|500)(?:\/|$)/.test(page),
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    imageOptimizer(),

    astrowind({
      config: configFile,
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [yamlPlugin(), pageContentPlugin()],
    optimizeDeps: {
      exclude: ['@keystatic/core'],
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        ...(locale !== 'en'
          ? {
              '~/data/site/navigation.yaml': path.resolve(__dirname, `./src/data/site/navigation.${locale}.yaml`),
            }
          : {}),
      },
    },
  },
});
