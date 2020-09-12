import express from 'express'
import { addProduct, deleteProduct, getAllProduct, getProductByID, getProductByName, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router.post('/add',addProduct)
router.get('/list',getAllProduct)
router.get('/findByID/:id',getProductByID)
router.get('/findByName/:name',getProductByName)
router.patch('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)


export default router