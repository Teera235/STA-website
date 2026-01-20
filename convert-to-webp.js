import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  console.log('Converting images to WebP...');
  
  await imagemin(['public/*.{jpg,png}'], {
    destination: 'public',
    plugins: [
      imageminWebp({ quality: 85 })
    ]
  });

  console.log('✓ Images converted to WebP format!');
})();
