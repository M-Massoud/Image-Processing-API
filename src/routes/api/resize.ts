import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../controllers/resize';
import * as validationMW from '../../middlewares/validation';

const resize = express.Router();

resize.get(
  '/resize',
  validationMW.validateResizeValues,
  validationMW.validationCheckErrors,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { width, height, filename } = req.query;

      const imgFileName = `resized-${width}x${height}-${filename}`;
      const imgFilePath = path.join(
        __dirname,
        '..',
        '..',
        '..',
        'src',
        'resizedImages',
        imgFileName
      );
      // check if the image already exist
      const imgExists = await fs.existsSync(imgFilePath);
      if (!imgExists) {
        await resizeImage(filename as string, Number(width), Number(height));
      }

      res.sendFile(imgFilePath);
    } catch (err) {
      console.log(err);
    }
  }
);

export default resize;
