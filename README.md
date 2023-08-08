# 🌄 Image Compression and Conversion

This README file provides detailed instructions for compressing and converting images using the provided code.

## 📋 Requirements

To use the provided code, you need to have the following installed:

- Node.js
- NPM (Node Package Manager)

## 🚀 Installation

1. Clone the repository or download the provided code.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the required packages:

npm install

## 💡 Usage

1. Prepare your images: 
   - Create a folder named `export` in the root directory of the project.
   - Inside the `export` folder, create a subfolder named `ToCompress`. Place the images you want to compress in this folder.

2. Open the `compress.js` file in a text editor.

3. Customize the output folder paths:
   - Set the `outputFolderPath` variable in the `compressImages` function to specify the folder where compressed images will be saved.
   - Set the `webpFolderPath` variable in the `compressImages` function to specify the folder where converted WebP images will be saved.

4. Customize image compression options (optional):
   - You can adjust the compression settings in the `compressImages` function:
     - For JPEG images, you can set the desired quality by modifying the `max` option in the `imageminJpegoptim` plugin.
     - For PNG images, you can set the desired quality range by modifying the `quality` option in the `imageminPngquant` plugin.

5. Save the changes to the `compress.js` file.

6. In the terminal or command prompt, run the following command to compress and convert the images:

node compress.js

7. Check the output:
   - The compressed images will be saved in the folder specified by `outputFolderPath`.
   - The converted WebP images will be saved in the folder specified by `webpFolderPath`.

## ❗ Troubleshooting

In case of any issues or errors, consider the following:

- Make sure you have provided the correct folder paths for input, output, and WebP folders in the `compress.js` file.
- Check if you have read and write permissions for the folders specified.
- Ensure that the images you want to compress are located in the correct subfolder (`ToCompress`) inside the `export` folder.

If you encounter any other errors or need further assistance, please don't hesitate to reach out for help.

## 🙌 Credits

This code is based on the following packages:

- [imagemin](https://www.npmjs.com/package/imagemin): Image optimization package for Node.js.
- [imagemin-jpegoptim](https://www.npmjs.com/package/imagemin-jpegoptim): Plugin for imagemin to compress JPEG images.
- [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant): Plugin for imagemin to compress PNG images.
- [imagemin-webp](https://www.npmjs.com/package/imagemin-webp): Plugin for imagemin to convert images to WebP format.

## 📄 License

[MIT License](LICENSE)
