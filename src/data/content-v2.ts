import yamlData from './site/content-v2.yaml';

export interface ContentV2Record {
  slug: string;
  category: 'problem' | 'guide' | 'comparison' | 'product' | 'authority';
  type: string;
  title: string;
  description: string;
  definition: string;
  tldr: string;
  problem: string;
  explanation: string;
  solution: string;
  recommendation: string;
  faq: { q: string; a: string }[];
  relatedGuides: string[];
  relatedProducts: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const contentV2Records = yamlData as ContentV2Record[];
