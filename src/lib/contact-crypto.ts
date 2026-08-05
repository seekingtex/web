import { randomBytes, scryptSync, createCipheriv, createDecipheriv } from 'node:crypto';

const ALGO = 'aes-256-gcm';
const IV_LENGTH = 12;
const KEY_LENGTH = 32;
const SALT = 'Seekingtex.contact.submissions.v1';

function deriveKey(): Buffer {
  const env = import.meta.env as Record<string, string | undefined>;
  const secret = env.SESSION_SECRET || env.KEYSTATIC_SECRET || randomBytes(32).toString('hex');
  return scryptSync(`${SALT}::${secret}`, SALT, KEY_LENGTH);
}

export interface EncryptedBlob {
  v: 1;
  iv: string;
  ct: string;
  tag: string;
}

export function encryptJson(plain: unknown): EncryptedBlob {
  const json = JSON.stringify(plain);
  const key = deriveKey();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGO, key, iv);
  const ct = Buffer.concat([cipher.update(json, 'utf-8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    v: 1,
    iv: iv.toString('base64'),
    ct: ct.toString('base64'),
    tag: tag.toString('base64'),
  };
}

export function decryptJson<T = unknown>(blob: EncryptedBlob): T {
  if (!blob || blob.v !== 1) throw new Error('Unsupported encryption format');
  const key = deriveKey();
  const iv = Buffer.from(blob.iv, 'base64');
  const ct = Buffer.from(blob.ct, 'base64');
  const tag = Buffer.from(blob.tag, 'base64');
  const decipher = createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  const json = Buffer.concat([decipher.update(ct), decipher.final()]).toString('utf-8');
  return JSON.parse(json) as T;
}

export function isEncryptedBlob(v: unknown): v is EncryptedBlob {
  return (
    !!v &&
    typeof v === 'object' &&
    'v' in v &&
    v.v === 1 &&
    typeof (v as unknown as { iv: unknown }).iv === 'string' &&
    typeof (v as unknown as { ct: unknown }).ct === 'string' &&
    typeof (v as unknown as { tag: unknown }).tag === 'string'
  );
}

export interface SubmissionRecord {
  id: string;
  receivedAt: string;
  ip?: string;
  userAgent?: string;
  blob: EncryptedBlob;
}

export interface DecryptedSubmission {
  id: string;
  receivedAt: string;
  ip?: string;
  userAgent?: string;
  data: Record<string, string>;
}

const SUBMISSIONS_PATH = 'src/data/contact/submissions.enc.json';

export function getSubmissionsPath(): string {
  return SUBMISSIONS_PATH;
}

export interface SubmissionsFile {
  v: 1;
  submissions: SubmissionRecord[];
}

export function emptySubmissionsFile(): SubmissionsFile {
  return { v: 1, submissions: [] };
}

export function readSubmissionsFile(parsed: unknown): SubmissionsFile {
  if (!parsed || typeof parsed !== 'object') return emptySubmissionsFile();
  const obj = parsed as Partial<SubmissionsFile>;
  if (obj.v !== 1 || !Array.isArray(obj.submissions)) return emptySubmissionsFile();
  return { v: 1, submissions: obj.submissions.filter((s) => s && typeof s.id === 'string' && isEncryptedBlob(s.blob)) };
}
