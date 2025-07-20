import { check } from 'express-validator';
import userRepo from '../repositories/users.js';

export default {
  requireEmailExist: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid email')
    .custom(async (email, { req }) => {
      const existingUser = await userRepo.getOneBy(email);

      if (!existingUser) {
        throw new Error("Email Doesn't Exist");
      }
    }),
  requirePasswordValid: check('password')
    .trim()
    .custom(async (password, { req }) => {
      const existingUser = await userRepo.getOneBy({
        email: req.body.email,
      });

      if (!existingUser) {
        throw new Error('Invalid Password');
      }

      const validPassword = await userRepo.comparePassoword(
        existingUser.password,
        password
      );

      if (!validPassword) {
        throw new Error('Invalid Password');
      }
    }),

  requireEmail: check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Must be a valid email')
    .custom(async (email, { req }) => {
      const existingUser = getOneBy({ email });

      if (existingUser) {
        throw new Error('Email in use');
      }
    }),
  requirePassword: check('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 charcters'),

  requirePasswordConfirmaiton: check('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 charcters ')
    .custom(async (passwordConfirmation, { req }) => {
      if (req.body.password !== passwordConfirmation) {
        throw new Error('Password must match');
      }
    }),
};
