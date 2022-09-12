import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('yes it works perfectly!');
});

const port = 3001;

server.listen(port, () => {
  console.log(`server currently listening on port ${port}`);
});

export default server;
