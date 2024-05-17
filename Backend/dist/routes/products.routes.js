"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const products_controllers_1 = require("../controllers/products.controllers");
router.route('/')
    .get(products_controllers_1.getProducts)
    .post(products_controllers_1.createProduct);
router.route('/:productId')
    .get(products_controllers_1.getProduct)
    .delete(products_controllers_1.deleteProduct)
    .put(products_controllers_1.updateProduct);
exports.default = router;
