import { NextFunction, Request, Response } from 'express';
import { validationResult, query } from 'express-validator';

export const validateResizeValues = [
  query('width').isNumeric().withMessage('width must be a number'),
  query('height').isNumeric().withMessage('height must be a number'),
];

export const validationCheckErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errorsFounded: errors.array() });
  }
  next();
};
