import express from 'express';
import middlewares from '../middlewares.js';
import profileTemplate from '../../views/pages/profile.js';
import userRepo from '../../repositories/users.js';

const router = express.Router();

router.get('/', middlewares.requireAuth, async (req, res) => {
  const { username } = await userRepo.getOneBy({ id: req.session.userId });
  res.send(profileTemplate({ req, username }));
});

export default router;
