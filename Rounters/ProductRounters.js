import express from 'express';
import { createProduct, getProductById, getProducts } from '../Controllers/productController.js';


const router = express.Router();

router.get("/getdata",getProducts)



export default router;