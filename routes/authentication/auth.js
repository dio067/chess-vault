import express from 'express';
import usersRepo from '../../repositories/users.js';
import validators from '../validators.js';
import signinTemplate from '../../views/authentication/signin.js';
import signupTemplate from '../../views/authentication/signup.js';
import middlewares from '../middlewares.js';

const router = express.Router();

console.log('validators:', validators);
console.log('middlewares:', middlewares);

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});
router.post(
  '/signup',
  [
    validators.requireEmail,
    validators.requirePassword,
    validators.requirePasswordConfirmation,
  ],
  middlewares.handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;

    res.redirect('/games');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  return res.redirect('/signin');
});

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
