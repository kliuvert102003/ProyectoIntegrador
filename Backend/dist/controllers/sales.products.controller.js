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
exports.updateSaleProduct = exports.deleteSaleProduct = exports.getSaleProduct = exports.createSaleProduct = exports.getsalesProducts = void 0;
const database_1 = require("../database");
function getsalesProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const salesProducts = yield conn.query('SELECT * FROM ventas_productos');
        return res.json(salesProducts[0]);
    });
}
exports.getsalesProducts = getsalesProducts;
;
function createSaleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newSaleProduct = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO ventas_productos SET ?', [newSaleProduct]);
        return res.json({
            message: 'Sale_Product created'
        });
    });
}
exports.createSaleProduct = createSaleProduct;
;
function getSaleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        const saleProduct = yield conn.query('SELECT * FROM ventas_productos WHERE id = ?', [id]);
        return res.json(saleProduct[0]);
    });
}
exports.getSaleProduct = getSaleProduct;
;
function deleteSaleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM ventas_productos WHERE id = ?', [id]);
        return res.json({
            message: 'Sale_Product deleted'
        });
    });
}
exports.deleteSaleProduct = deleteSaleProduct;
;
function updateSaleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateSaleProduct = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE ventas_productos set ? WHERE id = ?', [updateSaleProduct, id]);
        return res.json({
            message: 'Sale_Product updated'
        });
    });
}
exports.updateSaleProduct = updateSaleProduct;
;
