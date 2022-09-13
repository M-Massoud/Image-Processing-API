import express from 'express';
import server from '../app';

// import API routes
import teachers from './api/teachers';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('yes it works perfectly from our routes folder!');
});

router.use(teachers);

export default router;
