import { Router } from "express";
const router = Router();
import { getProducts,createProduct,getProduct, deleteProduct,updateProduct } from "../controllers/products.controllers";

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:productId')
    .get(getProduct) 
    .delete(deleteProduct)
    .put(updateProduct); 
export default router;