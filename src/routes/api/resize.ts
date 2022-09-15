import express, { Request, Response } from 'express';
import path from 'path';
import resizeImage from '../../controllers/resize';
import * as validationMW from '../../middlewares/validation';

const resize = express.Router();

resize.get(
  '/resize',
  validationMW.validateResizeValues,
  validationMW.validationCheckErrors,
  async (req: Request, res: Response) => {
    const { width, height, filename } = req.query;

    await resizeImage(filename as string, Number(width), Number(height));

    res.sendFile(
      path.join(
        __dirname,
        '..',
        '..',
        '..',
        'src',
        'resizedImages',
        `resized-${width}x${height}-${filename}`
      )
    );
  }
);

export default resize;
