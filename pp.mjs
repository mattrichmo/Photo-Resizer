// Import the required packages
import imagemin from 'imagemin';
import imageminJpegoptim from 'imagemin-jpegoptim';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import glob from 'glob';
import fs from 'fs';

// Define the function to convert images to WebP format
const convertToWebp = async (imagePaths, outputFolderPath) => {
  try {
    // Convert images to WebP format using imagemin
    const files = await imagemin(imagePaths, {
      destination: outputFolderPath,
      plugins: [imageminWebp()],
    });

    // Log a message indicating successful conversion
    console.log('Images converted to WebP:', files);
  } catch (error) {
    // Log an error message if conversion fails
    console.error('Error converting images to WebP:', error);
  }
};

// Define the function to compress images
const compressImages = async () => {
  // Set input, output, and WebP folder paths
  const inputFolderPath = './export/ToCompress/';
  const outputFolderPath = './export/Compressed/';
  const webpFolderPath = './export/WebP/';

  try {
    // Find all subfolders inside the input folder
    const subfolders = glob.sync(`${inputFolderPath}*`, { onlyDirectories: true });

    // Process each subfolder separately
    for (const subfolder of subfolders) {
      const subfolderName = path.basename(subfolder);
      const inputFolder = path.join(inputFolderPath, subfolderName);
      const outputFolder = path.join(outputFolderPath, subfolderName);
      const webpFolder = path.join(webpFolderPath, subfolderName);

      // Create output and WebP folders if they don't exist
      fs.mkdirSync(outputFolder, { recursive: true });
      fs.mkdirSync(webpFolder, { recursive: true });

      // Find all supported image types (JPEG, PNG) in the subfolder
      const imagePaths = glob.sync(`${inputFolder}/*.{jpg,jpeg,png,JPG}`);

      // Compress JPEG and PNG images
      const compressedFiles = await imagemin(imagePaths, {
        destination: outputFolder,
        plugins: [
          imageminJpegoptim({
            progressive: true,
            max: 80, // Set the desired quality (0 to 100)
          }),
          imageminPngquant({
            quality: [0.6, 0.8], // Set PNG quality (0 to 1)
          }),
        ],
      });

      // Log a message indicating successful compression
      console.log(`Images in ${subfolderName} compressed:`, compressedFiles);

      // Convert compressed images to WebP using the defined function
      await convertToWebp(compressedFiles.map(file => file.destinationPath), webpFolder);
    }
  } catch (error) {
    // Log an error message if processing fails
    console.error('Error processing images:', error);
  }
};

// Call the main function to compress and convert images
compressImages();
