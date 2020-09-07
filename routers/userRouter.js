import express  from 'express';
import {addUser} from '../controllers/userController.js';

const router = express.Router();

router.post('/resigter',addUser);

export default router;