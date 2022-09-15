import express from 'express';
import morgan from 'morgan';
import router from './routes';

const server = express();

server.use(morgan('tiny'));

// to serve static files
server.use('/src', express.static('src'));
server.use(express.json());
server.use(router);

const port = 3001;

server.listen(port, () => {
  console.log(`server currently listening on port ${port}`);
});

export default server;
