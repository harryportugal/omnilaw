const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '../public');
const logosDir = path.join(publicDir, 'logos');

async function convertImage(inputPath, outputPath, quality = 82) {
  try {
    const statsBefore = fs.statSync(inputPath);
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    const statsAfter = fs.statSync(outputPath);
    console.log(`Converted ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`Original: ${(statsBefore.size / 1024).toFixed(1)} KB | WebP: ${(statsAfter.size / 1024).toFixed(1)} KB (${((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1)}% reduction)`);
  } catch (err) {
    console.error(`Error converting ${inputPath}:`, err);
  }
}

async function run() {
  await convertImage(path.join(publicDir, 'juridico.png'), path.join(publicDir, 'juridico.webp'));
  await convertImage(path.join(publicDir, 'juridico 2.png'), path.join(publicDir, 'juridico 2.webp'));
  await convertImage(path.join(publicDir, 'back dack.png'), path.join(publicDir, 'back dack.webp'));
  await convertImage(path.join(logosDir, 'oab.png'), path.join(logosDir, 'oab.webp'));
  await convertImage(path.join(logosDir, 'mpf.png'), path.join(logosDir, 'mpf.webp'));
  await convertImage(path.join(logosDir, 'agu.png'), path.join(logosDir, 'agu.webp'));
}

run();
