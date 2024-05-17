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
exports.updateSale = exports.deleteSale = exports.getSale = exports.createSale = exports.getSales = void 0;
const database_1 = require("../database");
function getSales(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const sales = yield conn.query('SELECT * FROM ventas');
        return res.json(sales[0]);
    });
}
exports.getSales = getSales;
;
function createSale(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newSale = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO ventas SET ?', [newSale]);
        return res.json({
            message: 'Sale created'
        });
    });
}
exports.createSale = createSale;
;
function getSale(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.saleId;
        const conn = yield (0, database_1.connect)();
        const sale = yield conn.query('SELECT * FROM ventas WHERE id = ?', [id]);
        return res.json(sale[0]);
    });
}
exports.getSale = getSale;
;
function deleteSale(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.saleId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM ventas WHERE id = ?', [id]);
        return res.json({
            message: 'Sale deleted'
        });
    });
}
exports.deleteSale = deleteSale;
;
function updateSale(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.saleId;
        const updatesale = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE ventas set ? WHERE id = ?', [updatesale, id]);
        return res.json({
            message: 'Sale updated'
        });
    });
}
exports.updateSale = updateSale;
;
