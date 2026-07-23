export interface GarmentRecord {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  images: string[];
}

import raw from '../../public/products/garments.json' with { type: 'json' };

export const garments: GarmentRecord[] = raw as GarmentRecord[];

export const garmentCategories: { slug: string; name: string }[] = [
  { slug: 'down-styles', name: 'Down Styles' },
  { slug: 'jackets', name: 'Jackets' },
  { slug: 'coats', name: 'Coats' },
  { slug: 'shirt', name: 'Shirt' },
  { slug: 'beach-shorts', name: 'Beach Shorts' },
];

export function getGarmentsByCategory(category: string): GarmentRecord[] {
  return garments.filter((g) => g.category === category);
}

export function getGarment(id: string): GarmentRecord | undefined {
  return garments.find((g) => g.id === id);
}
