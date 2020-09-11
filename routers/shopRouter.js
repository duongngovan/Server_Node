import express from 'express';
import { addShop, getShop } from '../controllers/shopController.js';

const router = express.Router();

router.post('/register', addShop);

router.get('/list', getShop)

export default router;