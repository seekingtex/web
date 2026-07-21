import { execSync } from 'node:child_process';

try {
  execSync('npx wrangler vectorize create ai-index --dimensions=768 --metric=cosine 2>&1', {
    encoding: 'utf-8',
    timeout: 30000,
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  console.log('Ensured Vectorize index ai-index exists');
} catch {
  console.log('Vectorize index ai-index already exists or wrangler unavailable');
}

console.log('KV namespace injection skipped (KV not used)');
