import express from 'express'
import {
  addUser,
  deleteUser,
  getAllUser,
  login
} from '../controllers/userController.js'

const router = express.Router()

router.post('/resigter', addUser)

router.post('/login', login)

router.get('/list', getAllUser)

router.get('/delete/:id', deleteUser)

export default router
