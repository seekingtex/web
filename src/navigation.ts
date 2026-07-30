import { getPermalink } from './utils/permalinks';

import navData from '~/data/site/navigation.yaml';

const PRODUCT_LIST = '/products';

const headerData = {
  topBarLinks: navData?.header?.topBar ?? [],
  links: navData?.header?.links?.map((entry: { text?: string; links?: Array<{ text?: string; href?: string }> }) => ({
    text: entry?.text,
    links: (entry?.links ?? []).map((l: { text?: string; href?: string }) => ({ text: l?.text, href: l?.href })),
  })) ?? [
    {
      text: 'Fabric Library',
      links: [
        { text: 'Browse All Fabrics', href: getPermalink('/fabric-library') },
        { text: 'Sports & Activewear', href: getPermalink('/fabric-library/sports-fabric') },
        { text: 'Outdoor & Adventure', href: getPermalink('/fabric-library/outdoor-fabric') },
        { text: 'Workwear & Industrial', href: getPermalink('/fabric-library/workwear-fabric') },
        { text: 'Medical & Healthcare', href: getPermalink('/fabric-library/medical-fabric') },
        { text: 'Fashion Functional', href: getPermalink('/fabric-library/fashion-functional-fabric') },
      ],
    },
    {
      text: 'Products',
      links: [
        { text: 'All Products', href: getPermalink(PRODUCT_LIST) },
        { text: 'Sun Protection Fabrics', href: getPermalink('/sun-protection-fabric') },
        { text: 'Waterproof Fabrics', href: getPermalink('/waterproof-fabric') },
        { text: 'Quick-Dry Fabrics', href: getPermalink('/quick-dry-fabric') },
        { text: 'Antibacterial Fabrics', href: getPermalink('/antibacterial-fabric') },
        { text: 'Stretch Fabrics', href: getPermalink('/stretch-fabric') },
        { text: 'Breathable Fabrics', href: getPermalink('/breathable-fabric') },
        { text: 'Eco-Friendly Fabrics', href: getPermalink('/eco-friendly-fabric') },
        { text: 'Flame Retardant Fabrics', href: getPermalink('/flame-retardant-fabric') },
      ],
    },
  ],
  actions: navData?.header?.actions ?? [
    { text: 'Get a quote', href: getPermalink('/contact'), variant: 'primary' as const },
  ],
};

export { headerData };

export const footerData = {
  links: navData?.footer?.links ?? [
    {
      title: 'Fabric Library',
      links: [
        { text: 'Browse All Fabrics', href: getPermalink('/fabric-library') },
        { text: 'Sports & Activewear', href: getPermalink('/fabric-library/sports-fabric') },
        { text: 'Outdoor & Adventure', href: getPermalink('/fabric-library/outdoor-fabric') },
        { text: 'Workwear & Industrial', href: getPermalink('/fabric-library/workwear-fabric') },
        { text: 'Medical & Healthcare', href: getPermalink('/fabric-library/medical-fabric') },
        { text: 'Fashion Functional', href: getPermalink('/fabric-library/fashion-functional-fabric') },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'All Products', href: getPermalink(PRODUCT_LIST) },
        { text: 'Sun Protection Fabrics', href: getPermalink('/sun-protection-fabric') },
        { text: 'Waterproof Fabrics', href: getPermalink('/waterproof-fabric') },
        { text: 'Quick-Dry Fabrics', href: getPermalink('/quick-dry-fabric') },
        { text: 'Antibacterial Fabrics', href: getPermalink('/antibacterial-fabric') },
        { text: 'Stretch Fabrics', href: getPermalink('/stretch-fabric') },
        { text: 'Breathable Fabrics', href: getPermalink('/breathable-fabric') },
        { text: 'Eco-Friendly Fabrics', href: getPermalink('/eco-friendly-fabric') },
        { text: 'Flame Retardant Fabrics', href: getPermalink('/flame-retardant-fabric') },
      ],
    },
  ],
  secondaryLinks: navData?.footer?.secondaryLinks ?? [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: navData?.footer?.footNote,
  socialLinks: (navData?.footer?.socialLinks ?? []).filter((s: { href?: string }) => s?.href && s.href !== '#'),
};
