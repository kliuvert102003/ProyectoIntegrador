"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const database_1 = require("../database");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const products = yield conn.query('SELECT * FROM productos');
        return res.json(products[0]);
    });
}
exports.getProducts = getProducts;
;
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProducts = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO productos SET ?', [newProducts]);
        return res.json({
            message: 'Product created'
        });
    });
}
exports.createProduct = createProduct;
;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.productId;
        const conn = yield (0, database_1.connect)();
        const products = yield conn.query('SELECT * FROM productos WHERE id = ?', [id]);
        return res.json(products[0]);
    });
}
exports.getProduct = getProduct;
;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.productId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM productos WHERE id = ?', [id]);
        return res.json({
            message: 'Product deleted'
        });
    });
}
exports.deleteProduct = deleteProduct;
;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.productId;
        const updateProduct = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE productos set ? WHERE id = ?', [updateProduct, id]);
        return res.json({
            message: 'Product updated'
        });
    });
}
exports.updateProduct = updateProduct;
;
