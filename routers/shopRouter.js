
import express from 'express';
import { addShop, getShop } from '../controllers/shopController.js';

const router = express.Router();

router.post('/resigter', addShop);

router.get('/list', getShop)

import express  from 'express';
const router = express.Router();
export default router;