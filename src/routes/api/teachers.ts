import express from 'express';
import router from '../index';

const teachers = express.Router();

teachers.get('/teachers', (req, res) => {
  console.log(req.query);
  res.send(
    `does this work form the teachers route! and here's your query ${req.query.size}`
  );
});

export default teachers;
