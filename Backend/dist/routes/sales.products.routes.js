"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const sales_products_controller_1 = require("../controllers/sales.products.controller");
router.route('/')
    .get(sales_products_controller_1.getsalesProducts)
    .post(sales_products_controller_1.createSaleProduct);
router.route('/:id')
    .get(sales_products_controller_1.getSaleProduct)
    .delete(sales_products_controller_1.deleteSaleProduct)
    .put(sales_products_controller_1.updateSaleProduct);
exports.default = router;
