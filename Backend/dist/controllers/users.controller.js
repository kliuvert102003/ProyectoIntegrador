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
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
const database_1 = require("../database");
//Mostrar Usuarios
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query('SELECT * FROM usuarios');
        return res.json(users[0]);
    });
}
exports.getUsers = getUsers;
;
//Crear usuarios
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query(`INSERT INTO usuarios SET ?`, [newUser]);
        return res.json({
            message: 'User Created'
        });
    });
}
exports.createUser = createUser;
;
//Mostrar un solo usuario
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return res.json(users[0]);
    });
}
exports.getUser = getUser;
;
//Eliminar usuarios
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE  FROM usuarios WHERE id = ?', [id]);
        return res.json({
            message: "User deleted"
        });
    });
}
exports.deleteUser = deleteUser;
;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const updateUser = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE usuarios set ? WHERE id = ?', [updateUser, id]);
        return res.json({
            message: "User updated"
        });
    });
}
exports.updateUser = updateUser;
