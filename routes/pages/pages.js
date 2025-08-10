import express from 'express';
import homeRouter from './home.js';
import profileRouter from './profile.js';

const router = express.Router();

router.use('/home', homeRouter);
router.use('/profile', profileRouter);

export default router;
