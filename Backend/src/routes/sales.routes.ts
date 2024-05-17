import { Router } from "express";
const router = Router();
import { getSales,createSale,getSale, deleteSale, updateSale } from "../controllers/sales.controller";

router.route('/')
    .get(getSales)
    .post(createSale)
router.route('/:saleId')
    .get(getSale)
    .delete(deleteSale)  
    .put(updateSale) 


export default router;