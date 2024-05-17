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
exports.updateUserRole = exports.deleteUserRole = exports.getUserRole = exports.createUserRole = exports.getUserRoles = void 0;
const database_1 = require("../database");
function getUserRoles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const userRoles = yield conn.query('SELECT * FROM usuarios_roles');
        return res.json(userRoles[0]);
    });
}
exports.getUserRoles = getUserRoles;
;
function createUserRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUserRole = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO usuarios_roles SET ?', [newUserRole]);
        return res.json({
            message: 'User_Role created'
        });
    });
}
exports.createUserRole = createUserRole;
;
function getUserRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        const userRole = yield conn.query('SELECT * FROM usuarios_roles WHERE id = ?', [id]);
        return res.json(userRole[0]);
    });
}
exports.getUserRole = getUserRole;
;
function deleteUserRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM usuarios_roles WHERE id = ?', [id]);
        return res.json({
            message: 'User_Role deleted'
        });
    });
}
exports.deleteUserRole = deleteUserRole;
;
function updateUserRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateUserRole = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE usuarios_roles set ? WHERE id = ?', [updateUserRole, id]);
        return res.json({
            message: ' User_Role updated'
        });
    });
}
exports.updateUserRole = updateUserRole;
;
