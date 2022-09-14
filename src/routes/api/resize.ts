import express from 'express';
import resizeImage from '../../controllers/resize';

const resize = express.Router();

resize.get('/resize', (req, res) => {
  resizeImage(
    req.query.filename as string,
    Number(req.query.width),
    Number(req.query.height)
  );
  res.send('this is from the resize api');
});

export default resize;
