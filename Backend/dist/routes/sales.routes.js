"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const sales_controller_1 = require("../controllers/sales.controller");
router.route('/')
    .get(sales_controller_1.getSales)
    .post(sales_controller_1.createSale);
router.route('/:saleId')
    .get(sales_controller_1.getSale)
    .delete(sales_controller_1.deleteSale)
    .put(sales_controller_1.updateSale);
exports.default = router;
