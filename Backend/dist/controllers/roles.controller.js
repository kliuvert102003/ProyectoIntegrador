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
exports.updateRole = exports.deleteRole = exports.getRole = exports.createRole = exports.getRoles = void 0;
const database_1 = require("../database");
function getRoles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const roles = yield conn.query('SELECT * FROM roles');
        return res.json(roles[0]);
    });
}
exports.getRoles = getRoles;
;
function createRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newrole = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO roles SET ?', [newrole]);
        return res.json({
            message: 'Role created'
        });
    });
}
exports.createRole = createRole;
;
function getRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.roleId;
        const conn = yield (0, database_1.connect)();
        const role = yield conn.query('SELECT * FROM roles WHERE id = ?', [id]);
        return res.json(role[0]);
    });
}
exports.getRole = getRole;
;
function deleteRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.roleId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM roles WHERE id = ?', [id]);
        return res.json({
            message: 'Role deleted'
        });
    });
}
exports.deleteRole = deleteRole;
;
function updateRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.roleId;
        const updateRole = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE roles set ? WHERE id = ?', [updateRole, id]);
        return res.json({
            message: 'Role updated'
        });
    });
}
exports.updateRole = updateRole;
;
