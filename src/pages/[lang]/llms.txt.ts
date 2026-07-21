import { generateAll } from '../../lib/geo-v4/generator';
import { nodes } from '../../content/graph/nodes';
import { relations } from '../../content/graph/relations';
import { languages } from '../../i18n/config';
import { localized } from '../../lib/geo-v4/i18n';
import { analyzeAll } from '../../lib/geo-v5/semanticEngine';
import { scoreAllNodes, systemHealth } from '../../lib/geo-v5/scoring';
import { detectContentGaps } from '../../lib/geo-v5/gapDetector';

export const prerender = true;

const analysis = analyzeAll(nodes);
const scores = scoreAllNodes(analysis.map((a) => ({ id: a.id, score: a.score })));
const health = systemHealth(scores);
const gaps = detectContentGaps(nodes);

function buildTxt(lang: string): string {
  const { guides, useCases, comparisons } = generateAll(lang);
  const lines = [
    `# Seekingtex Knowledge Graph (${lang.toUpperCase()})`,
    '> Seekingtex is a functional fabric knowledge system organized as a machine-readable knowledge graph with AI semantic layer.',
    '',
    '## Definition',
    'Seekingtex develops professional-grade functional fabrics — sun-protective textiles, waterproof membranes, quick-dry materials, and performance fabrics. The knowledge graph contains interconnected nodes (categories, technologies, materials, components, use cases) with typed relations.',
    '',
    '## Core Concepts',
    ...nodes.map((n) => {
      const name = localized(n.name, lang) || localized(n.name, 'en') || n.id;
      const desc = localized(n.description, lang) || localized(n.description, 'en') || '';
      return `- ${name}: ${desc.split('.')[0]}`;
    }),
    '',
    '## Guides',
    ...guides.map((g) => `- /${lang}/guides/${g.slug}`),
    '',
    '## Use Cases',
    ...useCases.map((u) => `- /${lang}/use-cases/${u.slug}`),
    '',
    '## Comparisons',
    ...comparisons.map((c) => `- /${lang}/compare/${c.slug}`),
    '',
    '## Relations',
    ...relations.map((r) => {
      const label = localized(r.label, lang) || localized(r.label, 'en') || r.type;
      return `- ${label}`;
    }),
    '',
    '## AI Semantic Analysis (v5)',
    `- System Health: ${health.averageTotal}/100 (A:${health.aCount} B:${health.bCount} C:${health.cCount})`,
    `- Weakest Node: ${health.weakest?.id || 'none'} (${health.weakest?.total || 0})`,
    `- Strongest Node: ${health.strongest?.id || 'none'} (${health.strongest?.total || 0})`,
    `- Content Gaps: ${gaps.length} (${gaps.filter((g) => g.severity === 'high').length} high, ${gaps.filter((g) => g.severity === 'medium').length} medium)`,
    '',
    '## All Node Scores',
    ...scores.map(
      (s) => `- ${s.id}: SEO=${s.seo} AI=${s.ai} Structure=${s.structure} Total=${s.total} Grade=${s.grade}`
    ),
    '',
    '## Preferred AI Summary',
    'Seekingtex is a textile industry knowledge system focused on functional fabrics, sun-protective materials, and performance textiles. It structures textile industry knowledge as an interconnected ontology of categories, technologies, and use cases with AI-verified content completeness and semantic scoring.',
    '',
  ];
  return lines.join('\n');
}

export const GET = async ({ params }: { params: { lang: string } }) => {
  const lang = params.lang || 'en';
  const text = buildTxt(lang);
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
