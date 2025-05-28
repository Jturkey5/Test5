const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../images');
const outputDir = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Generate favicons and app icons
async function generateIcons() {
    const sizes = [16, 32, 192, 512];
    const logo = path.join(inputDir, 'logo.png');

    for (const size of sizes) {
        await sharp(logo)
            .resize(size, size)
            .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
    }

    // Generate special sizes for different platforms
    await sharp(logo)
        .resize(180, 180)
        .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    await sharp(logo)
        .resize(192, 192)
        .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

    await sharp(logo)
        .resize(512, 512)
        .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
}

// Optimize social media images
async function optimizeSocialImages() {
    const ogImage = path.join(inputDir, 'og-image.jpg');
    const twitterCard = path.join(inputDir, 'twitter-card.jpg');

    await sharp(ogImage)
        .resize(1200, 630)
        .jpeg({ quality: 85 })
        .toFile(path.join(outputDir, 'og-image.jpg'));

    await sharp(twitterCard)
        .resize(1200, 600)
        .jpeg({ quality: 85 })
        .toFile(path.join(outputDir, 'twitter-card.jpg'));
}

// Process all other images in the directory
async function processImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file);

            await sharp(inputPath)
                .resize(1920, null, { withoutEnlargement: true })
                .jpeg({ quality: 85 })
                .toFile(outputPath);

            // Create WebP version
            await sharp(inputPath)
                .resize(1920, null, { withoutEnlargement: true })
                .webp({ quality: 85 })
                .toFile(path.join(outputDir, `${path.parse(file).name}.webp`));
        }
    }
}

async function main() {
    try {
        await generateIcons();
        await optimizeSocialImages();
        await processImages();
        console.log('Image optimization completed successfully!');
    } catch (error) {
        console.error('Error optimizing images:', error);
        process.exit(1);
    }
}

main(); 