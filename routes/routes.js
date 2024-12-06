import express from 'express'
import protectRoute from '../middleware/protected.js'
import { getProducts } from '../controllers/products.controller.js'

const router = express.Router()

router.get('/products', getProducts)

export default router