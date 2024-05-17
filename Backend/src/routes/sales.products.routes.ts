import { Router } from "express";
const router = Router();
import { getsalesProducts, createSaleProduct,getSaleProduct, deleteSaleProduct,updateSaleProduct } from "../controllers/sales.products.controller";

router.route('/')
    .get(getsalesProducts)
    .post(createSaleProduct)

router.route('/:id')
    .get(getSaleProduct)
    .delete(deleteSaleProduct)    
    .put(updateSaleProduct)

export default router;