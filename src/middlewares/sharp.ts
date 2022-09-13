import sharp from 'sharp';
import fs from 'fs';

async function resizeImage() {
  try {
    await sharp('./src/images/landscape.jpg')
      .resize({
        width: 150,
        height: 150,
      })
      .toFile('resizedlandscape.jpg');
  } catch (error) {
    console.log(error);
  }
}

resizeImage();

// console.log('from sharp file in the middlewares');

export default resizeImage;
