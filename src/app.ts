import express from 'express';
import morgan from 'morgan';
import router from './routes';
import resizeImage from './middlewares/sharp';

const server = express();

server.use(morgan('tiny'));

server.use(router);

server.use(resizeImage);
// server.get('/', (req, res) => {
//   res.send('yes it works perfectly!');
// });

const port = 3001;

server.listen(port, () => {
  console.log(`server currently listening on port ${port}`);
});

export default server;
