import express from 'express';
import usersRepo from '../../routes/authentication/auth.js';
import validators from '../validators.js';
import signinTemplate from '../../views/authentication/signin.js';
import signupTemplate from '../../views/authentication/signup.js';
import middlewares from '../middlewares.js';
import signin from '../../views/authentication/signin.js';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [
    validators.requireEmail,
    validators.requirePassword,
    validators.requirePasswordConfirmaiton,
  ],
  middlewares.handleErrors(signupTemplate),
  async (req, res) => {
    res.redirect('/games');
  }
);

router.get('/signin', (req, res) => {
  res.send(signinTemplate({ req }));
});
router.post(
  '/signin',
  [validators.requireEmailExist, validators.requirePasswordValid],
  middlewares.handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.redirect('/games');
  }
);
export default router;
