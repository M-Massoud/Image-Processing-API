import express from 'express';

// import API routes
import resize from './api/resize';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome to home page!');
});

router.use(resize);

export default router;
