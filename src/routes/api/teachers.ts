import express from 'express';
import router from '../index';

const teachers = express.Router();

teachers.get('/teachers', (req, res) => {
  res.send('does this work form the teachers route!');
});

export default teachers;
