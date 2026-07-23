// Extract product data from D:\Products folder
const fs = require('fs');
const path = require('path');

const productsDir = 'D:\\Products';
const outputDir = path.join(__dirname, '..', 'public', 'products');

fs.mkdirSync(path.join(outputDir, 'images'), { recursive: true });

const categorySlugs = {
  'Beach shorts': 'beach-shorts',
  Coats: 'coats',
  'Down styles': 'down-styles',
  Jackets: 'jackets',
  Shirt: 'shirt',
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

const categories = fs
  .readdirSync(productsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && categorySlugs[d.name]);

const allProducts = [];

for (const cat of categories) {
  const catPath = path.join(productsDir, cat.name);
  const catSlug = categorySlugs[cat.name];
  const products = fs.readdirSync(catPath, { withFileTypes: true }).filter((d) => d.isDirectory());

  console.log(`\nCategory: ${cat.name} (${products.length} products)`);

  for (const prod of products) {
    const prodPath = path.join(catPath, prod.name);
    const files = fs.readdirSync(prodPath);

    // Find main product images - exclude thumbnails, html-associated files
    const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('_files') && !f.includes('.html'));

    const savedImages = [];
    const slug = slugify(prod.name);
    images.forEach((img, idx) => {
      const src = path.join(prodPath, img);
      const ext = path.extname(img).toLowerCase();
      const destName = `${slug}${idx > 0 ? '-' + idx : ''}${ext}`;
      const dest = path.join(outputDir, 'images', destName);
      try {
        fs.copyFileSync(src, dest);
        savedImages.push(`/products/images/${destName}`);
      } catch (e) {
        console.error(`    Failed to copy ${img}: ${e.message}`);
      }
    });

    allProducts.push({
      id: slug,
      name: prod.name,
      category: catSlug,
      categoryName: cat.name,
      images: savedImages,
    });

    console.log(`  [${savedImages.length} img] ${prod.name.slice(0, 60)}...`);
  }
}

// Write JSON
fs.writeFileSync(path.join(outputDir, 'garments.json'), JSON.stringify(allProducts, null, 2), 'utf-8');

console.log(`\nDone! Extracted ${allProducts.length} products to public/products/`);
