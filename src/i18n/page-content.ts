import pageContentData from 'astro:page-content';
import type { Item } from '~/types';

/**
 * Loose content block shared by every section / array item in the YAML page
 * data (`src/data/pages/{lang}/*.yaml`). Known fields are typed; anything else
 * falls back to `unknown` through the index signature.
 *
 * The same top-level key can be an object in one page and an array in another
 * (e.g. `stats`, `categories`), so the array-style fields on this interface are
 * kept intentionally loose and the ambiguous top-level keys are typed as
 * `BlockElement & BlockElement[]`.
 */
export interface BlockElement {
  title?: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  desc?: string;
  text?: string;
  highlight?: string;
  label?: string;
  value?: string;
  num?: string;
  icon?: string;
  level?: string;
  color?: string;
  badge?: string;
  slug?: string;
  guide_slug?: string;
  link?: string;
  cta?: string;
  cta_link?: string;
  secondary_cta?: string;
  secondary_cta_link?: string;
  footer_link?: string;
  cta_suffix?: string;
  read_guide?: string;
  back_link?: string;
  back_label?: string;
  image?: string;
  src?: string;
  alt?: string;
  year?: string;
  name?: string;
  platform?: string;
  url?: string;
  href?: string;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  id?: string;
  question?: string;
  answer?: string;
  testimonial?: string;
  job?: string;
  content?: string;
  placeholder?: string;
  body?: string;
  position?: string;
  link_href?: string;
  link_text?: string;
  required?: boolean;
  amount?: string | number;
  address?: string;
  embedUrl?: string;
  latitude?: string;
  longitude?: string;
  zoom?: number;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
  isDark?: boolean;
  /** number for widget columns; array for pages that map over `columns`. */
  columns?: number | BlockElement[];
  /** Loose array elements; also assignable to the widget `Item[]` prop types. */
  items?: Array<BlockElement & Item>;
  subcategories?: string[];
  steps?: BlockElement[];
  sections?: BlockElement[];
  stats?: BlockElement[];
  values?: BlockElement[];
  services?: BlockElement[];
  certifications?: BlockElement[];
  capabilities?: BlockElement[];
  pillars?: BlockElement[];
  categories?: BlockElement[];
  topics?: BlockElement[];
  guides?: BlockElement[];
  faqs?: BlockElement[];
  tests?: BlockElement[];
  points?: BlockElement[];
  stories?: BlockElement[];
  testimonials?: BlockElement[];
  milestones?: BlockElement[];
  locations?: BlockElement[];
  albums?: BlockElement[];
  articles?: BlockElement[];
  clusters?: BlockElement[];
  images?: string[];
  departments?: BlockElement[];
  equipments?: BlockElement[];
  workshops?: BlockElement[];
  stages?: BlockElement[];
  suppliers?: BlockElement[];
  links?: BlockElement[];
  regions?: BlockElement[];
  headers?: BlockElement & BlockElement[];
  actions?: string | BlockElement[];
  strengths?: string[];
  bestFor?: string[];
  cards?: BlockElement & BlockElement[];
  areas?: BlockElement[];
  groups?: BlockElement[];
  labs?: BlockElement[];
  fields?: BlockElement[];
  consent?: BlockElement;
  global?: BlockElement;
  quality?: BlockElement;
  manufacturing?: BlockElement;
  email_to?: string;
  submit_button?: string;
  success_message?: string;
  error_message?: string;
  default_country_code?: string;
  product?: string;
  weight?: string;
  width?: string;
  length?: string;
  max_load?: string;
  best_for?: string;
  finish?: string;
  construction?: string;
  contact?: BlockElement;
  mission?: BlockElement;
  seo?: BlockElement;
  [key: string]: unknown;
}

/** Alias kept for readability in consumers. */
export type Block = BlockElement;

/**
 * Typed shape of a page's YAML data (`src/data/pages/{lang}/*.yaml`). Keys are
 * intentionally non-optional so existing `page.x ?? {}` / `|| {}` guards keep
 * working; the YAML files are complete at runtime.
 */
export interface PageContent {
  hero: BlockElement;
  stats: BlockElement & BlockElement[];
  categories: BlockElement & BlockElement[];
  sections: BlockElement[];
  steps: BlockElement[];
  values: BlockElement[];
  services: BlockElement[];
  certifications: BlockElement[];
  capabilities: BlockElement;
  pillars: BlockElement[];
  tests: BlockElement[];
  albums: BlockElement[];
  articles: BlockElement[];
  rd_numbers: BlockElement;
  rd_services: BlockElement;
  factory_details: BlockElement[];
  timeline: BlockElement[];
  intro: string[];
  faqs: BlockElement;
  stories: BlockElement;
  testimonials: BlockElement;
  locations: BlockElement;
  cta: BlockElement;
  mission: BlockElement;
  labs_section: BlockElement;
  commitment: BlockElement;
  testing_section: BlockElement;
  position: BlockElement;
  products_section: BlockElement;
  global_section: BlockElement;
  social_section: BlockElement;
  steps_section: BlockElement;
  services_section: BlockElement;
  capabilities_section: BlockElement;
  why_section: BlockElement;
  values_section: BlockElement;
  certifications_section: BlockElement;
  factory_section: BlockElement;
  ethos_section: BlockElement;
  community_section: BlockElement;
  cta_section: BlockElement;
  adventures_cta: BlockElement;
  features3_certifications: BlockElement;
  features3_what_we_build: BlockElement;
  features3_more: BlockElement;
  steps2_values: BlockElement;
  steps2_milestones: BlockElement;
  steps2_manufacturing: BlockElement;
  features2_locations: BlockElement;
  faqs_textile: BlockElement;
  faqs_fabric: BlockElement;
  faqs_performance: BlockElement;
  clusters: BlockElement;
  featured_guides: BlockElement;
  related: BlockElement;
  latest: BlockElement;
  featured: BlockElement;
  how_to_choose: BlockElement;
  table: BlockElement;
  philosophy: BlockElement;
  engineeringDna: BlockElement;
  productEcosystem: BlockElement;
  trustSignals: BlockElement;
  comparison: BlockElement;
  qc_dashboard: BlockElement;
  material_traceability: BlockElement;
  workforce: BlockElement;
  production_flow: BlockElement;
  process_cta: BlockElement;
  equipment_section: BlockElement;
  workshops_section: BlockElement;
  hero_text: BlockElement;
  quick_info: BlockElement;
  contact_form: BlockElement;
  features2_other_ways: BlockElement;
  map: BlockElement;
  seo: BlockElement;
  request_access: string;
  read_guide: string;
  headline: string;
  label: string;
  subtitle: string;
  body: string;
  b2b_moq: string;
}

const cache = new Map<string, PageContent>();

export function getPageContent(lang: string, page: string = 'home'): PageContent {
  const key = `${lang}/${page}`;
  if (cache.has(key)) return cache.get(key) as PageContent;
  const data = pageContentData[key] || pageContentData[`en/${page}`] || ({} as PageContent);
  cache.set(key, data);
  return data;
}
