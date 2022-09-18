import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const resizedImgsFolder = path.join('src', 'resizedImages');

async function resizeImage(
  imgName: string,
  width: number,
  height: number
): Promise<void> {
  try {
    // create the resized images folder if it doesn't exist
    try {
      if (!fs.existsSync(resizedImgsFolder)) {
        fs.mkdirSync(resizedImgsFolder);
        console.log('resized folder created successfully');
      }
    } catch (err) {
      console.error(err);
    }
    // resize the image
    console.log(imgName);
    await sharp(path.join('src', 'images', imgName))
      .resize({
        width: width,
        height: height,
      })
      .toFile(
        path.join(
          'src',
          'resizedImages',
          `resized-${width}x${height}-${imgName}`
        )
      );
  } catch (error) {
    console.log(error);
  }
}

export default resizeImage;
