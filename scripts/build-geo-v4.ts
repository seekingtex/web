import { generateAll } from '../src/lib/geo-v4/generator.js';
import { localized } from '../src/lib/geo-v4/i18n.js';
import { nodes } from '../src/content/graph/nodes.js';
import { relations } from '../src/content/graph/relations.js';
import { analyzeAll } from '../src/lib/geo-v5/semanticEngine.js';
import { scoreAllNodes, systemHealth } from '../src/lib/geo-v5/scoring.js';
import { clusterTopics } from '../src/lib/geo-v5/topicCluster.js';
import { detectContentGaps, gapsBySeverity } from '../src/lib/geo-v5/gapDetector.js';
import { SITE_SECTIONS } from '../src/data/site/sections.js';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const dir = import.meta.dirname;
const root = path.resolve(dir, '..');
const publicDir = path.join(root, 'public');

function readSiteUrl(): string {
  try {
    const configPath = path.join(root, 'src', 'config.yaml');
    const raw = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(raw) as any;
    return config?.site?.site || 'https://seekingtex.com';
  } catch {
    return 'https://seekingtex.com';
  }
}

const allLangs = ['en', 'zh', 'fr', 'de', 'es', 'pt', 'ar', 'it', 'ja', 'ko', 'ru', 'pl', 'nl'];

// --- v5 AI Semantic Analysis (run once in English for diagnostics) ---
const analysis = analyzeAll(nodes);
const scores = scoreAllNodes(analysis.map((a) => ({ id: a.id, score: a.score })));
const health = systemHealth(scores);
const clusters = clusterTopics(nodes);
const gaps = detectContentGaps(nodes);
const gapGroups = gapsBySeverity(gaps);

console.log(`\n[GEO v5] AI Semantic Analysis:`);
console.log(`  System Health: ${health.averageTotal}/100`);
console.log(`  Grade Distribution: A=${health.aCount} B=${health.bCount} C=${health.cCount}`);
console.log(`  Weakest Node: ${health.weakest?.id} (${health.weakest?.total})`);
console.log(`  Strongest Node: ${health.strongest?.id} (${health.strongest?.total})`);
console.log(`  Content Gaps: ${gaps.length} high=${gapGroups.high.length} medium=${gapGroups.medium.length}`);
console.log(
  `  Topic Clusters: ${Object.entries(clusters)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(', ')}`
);

if (gapGroups.high.length > 0) {
  console.log(`\n  \u26a0 High Severity Gaps:`);
  for (const g of gapGroups.high) {
    console.log(`    - ${g.node}: ${g.issue}`);
  }
}

const siteName: Record<string, string> = {
  en: 'seekingtex',
  zh: 'seekingtex',
  fr: 'seekingtex',
  de: 'seekingtex',
  es: 'seekingtex',
  pt: 'seekingtex',
  ar: 'seekingtex',
  it: 'seekingtex',
  ja: 'seekingtex',
  ko: 'seekingtex',
  ru: 'seekingtex',
  pl: 'seekingtex',
  nl: 'seekingtex',
};

const definition: Record<string, string> = {
  en: 'seekingtex designs professional-grade inflatable watercraft \u2014 SUP boards, kayaks, dinghies, RIBs, safety equipment, and accessories.',
  zh: 'seekingtex 设计专业级充气水上交通工具 — SUP 桨板、皮划艇、充气艇、RIB、安全设备和配件。',
  fr: 'seekingtex con\u00e7oit des embarcations gonflables de qualit\u00e9 professionnelle \u2014 planches SUP, kayaks, annexes, RIB, \u00e9quipements de s\u00e9curit\u00e9 et accessoires.',
  de: 'seekingtex entwickelt professionelle aufblasbare Wasserfahrzeuge \u2014 SUP-Boards, Kajaks, Dingis, RIBs, Sicherheitsausr\u00fcstung und Zubeh\u00f6r.',
  es: 'seekingtex dise\u00f1a embarcaciones inflables de grado profesional \u2014 tablas SUP, kayaks, botes, RIB, equipos de seguridad y accesorios.',
  pt: 'seekingtex concebe embarca\u00e7\u00f5es insufl\u00e1veis de qualidade profissional \u2014 pranchas SUP, caiaques, botes, RIB, equipamentos de seguran\u00e7a e acess\u00f3rios.',
  ar: 'seekingtex تصمم قوارب م inflatable احترافية \u2014 لوحات SUP، القوارب الهوائية، القوارب الصغيرة، RIB، معدات السلامة والإكسسوارات.',
  it: 'seekingtex progetta imbarcazioni gonfiabili di qualit\u00e0 professionale \u2014 tavole SUP, kayak, dinghy, RIB, attrezzature di sicurezza e accessori.',
  ja: 'seekingtex はプロフェッショナルグレードのインフレータブルウォータクラフトを設計しています \u2014 SUPボード、カヤック、ディンギー、RIB、安全機器、アクセサリー。',
  ko: 'seekingtex는 프로페셔널급 인플레이터블 수상 선박을 설계합니다 \u2014 SUP 보드, 카약, 딩기, RIB, 안전 장비 및 액세서리.',
  ru: 'seekingtex проектирует профессиональные надувные водные суда \u2014 SUP-доски, каяки, надувные лодки, RIB, средства безопасности и аксессуары.',
  pl: 'seekingtex projektuje profesjonalne nadmuchiwane jednostki p\u0142ywaj\u0105ce \u2014 deski SUP, kajaki, dinghy, RIB, sprz\u0119t bezpiecze\u0144stwa i akcesoria.',
  nl: "seekingtex ontwerpt professionele opblaasbare watersportvaartuigen \u2014 SUP-boards, kajaks, bijboten, RIB's, veiligheidsuitrusting en accessoires.",
};

const summary: Record<string, string> = {
  en: 'seekingtex is a water sports knowledge system focused on inflatable SUPs, paddle systems, and ocean mobility gear. It structures water sports equipment as an interconnected ontology of categories, technologies, and use cases with AI-verified content completeness.',
  zh: 'seekingtex 是一个水上运动知识系统，专注于充气 SUP、桨板系统和海洋移动装备。它将水上运动设备构建为类别、技术和用例的互联本体，具有 AI 验证的内容完整性。',
  fr: "seekingtex est un syst\u00e8me de connaissances sur les sports nautiques ax\u00e9 sur les SUP gonflables, les syst\u00e8mes de pagaie et les \u00e9quipements de mobilit\u00e9 oc\u00e9anique. Il structure les \u00e9quipements de sports nautiques en une ontologie interconnect\u00e9e de cat\u00e9gories, technologies et cas d'utilisation.",
  de: 'seekingtex ist ein Wissenssystem f\u00fcr Wassersport mit Schwerpunkt auf aufblasbaren SUPs, Paddelsystemen und Ausr\u00fcstung f\u00fcr die Meeresmobilit\u00e4t.',
  es: 'seekingtex es un sistema de conocimiento de deportes acu\u00e1ticos centrado en SUP inflables, sistemas de remo y equipos de movilidad oce\u00e1nica.',
  pt: 'seekingtex \u00e9 um sistema de conhecimento de desportos aqu\u00e1ticos focado em SUPs insufl\u00e1veis, sistemas de remo e equipamentos de mobilidade oce\u00e2nica.',
  ar: 'seekingtex هو نظام معرفة للرياضات المائية يركز على لوحات SUP القابلة للنفخ وأنظمة التجديف ومعدات التنقل البحري.',
  it: 'seekingtex \u00e8 un sistema di conoscenza degli sport acquatici incentrato su SUP gonfiabili, sistemi di pagaiata e attrezzature per la mobilit\u00e0 oceanica.',
  ja: 'seekingtex は、インフレータブル SUP、パドルシステム、海洋移動機器に焦点を当てたウォータースポーツ知識システムです。',
  ko: 'seekingtex는 인플레이블 SUP, 패들 시스템 및 해양 이동 장비에 중점을 둔 수상 스포츠 지식 시스템입니다.',
  ru: 'seekingtex \u2014 это система знаний о водных видах спорта, ориентированная на надувные SUP, весельные системы и оборудование для морской мобильности.',
  pl: 'seekingtex to system wiedzy o sportach wodnych skoncentrowany na nadmuchiwanych SUP, systemach wios\u0142owych i sprz\u0119cie do mobilno\u015bci oceanicznej.',
  nl: "seekingtex is een watersportkennissysteem gericht op opblaasbare SUP's, peddelsystemen en uitrusting voor oceaane mobiliteit. Het structureert watersportuitrusting als een onderling verbonden ontologie van categorie\u00ebn, technologie\u00ebn en gebruiksscenario's.",
};

// --- Generate llms.txt for each language ---
function generateLlmsTxt() {
  for (const lang of allLangs) {
    const { guides, useCases, comparisons } = generateAll(lang);

    const lines = [
      `# ${siteName[lang] || 'seekingtex'} Knowledge Graph`,
      `> ${siteName[lang] || 'seekingtex'} is an inflatable water gear knowledge system organized as a machine-readable knowledge graph.`,
      '',
      '## Definition',
      definition[lang] || definition.en,
      '',
      '## Core Concepts',
      ...nodes.map((n) => {
        const name = localized(n.name, lang) || localized(n.name, 'en') || n.id;
        const desc = localized(n.description, lang) || localized(n.description, 'en') || '';
        return `- ${name}: ${desc.split('.')[0]}`;
      }),
      '',
      '## Guides',
      ...guides.map((g) => `- ${g.title}`),
      '',
      '## Use Cases',
      ...useCases.map((u) => `- ${u.title}`),
      '',
      '## Comparisons',
      ...comparisons.map((c) => `- ${c.title}`),
      '',
      '## Relations',
      ...relations.map((r) => {
        const label = localized(r.label, lang) || localized(r.label, 'en') || r.type;
        return `- ${label}`;
      }),
      '',
      '## AI Semantic Analysis (v5)',
      `- System Health: ${health.averageTotal}/100 (A:${health.aCount} B:${health.bCount} C:${health.cCount})`,
      `- Content Gaps: ${gaps.length} (${gapGroups.high.length} high, ${gapGroups.medium.length} medium)`,
      '',
      '## Preferred AI Summary',
      summary[lang] || summary.en,
      '',
    ];

    let content = lines.join('\n');

    if (lang === 'en') {
      const base = readSiteUrl();
      const sectionLines = SITE_SECTIONS.map((s) => `- [${s.label}](${base}${s.path})`);
      content += '\n## Site Sections\n' + sectionLines.join('\n') + '\n\n';
      fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf-8');
    }
    // Per-language file
    const langDir = path.join(publicDir, lang);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });
    fs.writeFileSync(path.join(langDir, 'llms.txt'), content, 'utf-8');
  }
  console.log(`\n[GEO v4] llms.txt written for ${allLangs.length} languages (${nodes.length}n, ${relations.length}r)`);
}

const LANG_PRIORITY: Record<string, number> = {
  en: 1.0,
  ja: 0.9,
  ko: 0.8,
  fr: 0.7,
  de: 0.7,
  es: 0.7,
  pt: 0.7,
  it: 0.7,
  nl: 0.65,
  zh: 0.6,
  ar: 0.55,
  pl: 0.55,
  ru: 0.5,
  sv: 0.65,
  da: 0.65,
  fi: 0.6,
  no: 0.65,
  ro: 0.5,
  el: 0.5,
  tr: 0.5,
  th: 0.5,
};

// --- Generate sitemap-entity.xml (English, per-language) ---
function generateSitemap() {
  const { guides, useCases, comparisons } = generateAll('en');
  const base = readSiteUrl();
  const entries: Array<{ loc: string; entity: string; type: string; priority: string }> = [];

  for (const lang of allLangs) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    const langBoost = LANG_PRIORITY[lang] ?? 0.5;
    for (const guide of guides) {
      entries.push({
        loc: `${base}${prefix}/guides/${guide.slug}`,
        entity: guide.slug,
        type: 'guide',
        priority: (0.8 * langBoost).toFixed(2),
      });
    }
    for (const uc of useCases) {
      entries.push({
        loc: `${base}${prefix}/use-cases/${uc.slug}`,
        entity: uc.slug,
        type: 'use-case',
        priority: (0.7 * langBoost).toFixed(2),
      });
    }
    for (const cmp of comparisons) {
      entries.push({
        loc: `${base}${prefix}/compare/${cmp.slug}`,
        entity: cmp.slug,
        type: 'compare',
        priority: (0.6 * langBoost).toFixed(2),
      });
    }
  }

  const staticPaths: Array<{ path: string; entity: string; type: string; priority: string }> = SITE_SECTIONS.map(
    (s) => ({
      path: s.path,
      entity: s.sitemap?.entity || s.path.replace(/^\//, '').replace(/\//g, '-'),
      type: s.sitemap?.type || 'page',
      priority: s.sitemap?.priority || '0.5',
    })
  );

  for (const lang of allLangs) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    const langBoost = LANG_PRIORITY[lang] ?? 0.5;
    for (const sp of staticPaths) {
      const loc = `${base}${prefix}${sp.path}`;
      if (!entries.find((e) => e.loc === loc)) {
        entries.push({
          loc,
          entity: sp.entity,
          type: sp.type,
          priority: (parseFloat(sp.priority) * langBoost).toFixed(2),
        });
      }
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:x="https://seekingtex.com/geo">\n`;
  for (const e of entries) {
    xml += `  <url>\n    <loc>${e.loc}</loc>\n    <x:entity>${e.entity}</x:entity>\n    <x:type>${e.type}</x:type>\n    <priority>${e.priority}</priority>\n  </url>\n`;
  }
  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(publicDir, 'sitemap-entity.xml'), xml);
  console.log(`[GEO v4] sitemap-entity.xml written (${entries.length} entries)`);
}

console.log('=== GEO v4 + v5 Build Pipeline ===');
generateLlmsTxt();
generateSitemap();
console.log('\n=== GEO v4 + v5 Build Complete ===');
