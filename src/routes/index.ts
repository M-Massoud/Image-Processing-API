import express, { Request, Response } from 'express';

// import API routes
import resize from './api/resize';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.send('welcome to home page!');
});

router.use(resize);

export default router;
