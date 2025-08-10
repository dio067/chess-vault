import express from 'express';
import homeTemplate from '../../views/pages/home.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(homeTemplate({ req }));
});

export default router;
