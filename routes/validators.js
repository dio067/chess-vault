import { check } from 'express-validator';
import userRepo from '../repositories/users.js';

export default {
  requireUsername: check('username')
    .trim()
    .isLength({ max: 40 })
    .withMessage('username is too long')
    .custom(async (username) => {
      const user = await userRepo.getOneBy({ username });

      if (user) {
        throw new Error('Username in use');
      }
    }),
  requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Email must be valid')
    .custom(async (email) => {
      const user = await userRepo.getOneBy({ email });

      if (user) {
        throw new Error('Email in use');
      }
    }),

  requirePassword: check('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password mut be between 4 and 20 charcters'),

  requirePasswordConfirmation: check('passwordConfirmation')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters')
    .custom(async (passwordConfirmation, { req }) => {
      if (req.body.password !== passwordConfirmation) {
        throw new Error('Passwords must match');
      }
    }),

  requireEmailExist: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Email must be valid')
    .custom(async (email) => {
      const user = await userRepo.getOneBy({ email });

      if (!user) {
        throw new Error('Email not found');
      }
    }),

  requirePasswordValid: check('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password not valid')
    .custom(async (password, { req }) => {
      const { email } = req.body;

      const user = await userRepo.getOneBy({ email });

      if (!user) {
        throw new Error('Invalid password');
      }

      const validPassword = await userRepo.comparePasswords(
        user.password,
        password
      );

      if (!validPassword) {
        throw new Error('Invalid password');
      }
    }),
};
