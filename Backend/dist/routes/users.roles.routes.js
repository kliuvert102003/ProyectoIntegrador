"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_roles_controller_1 = require("../controllers/user.roles.controller");
router.route('/')
    .get(user_roles_controller_1.getUserRoles)
    .post(user_roles_controller_1.createUserRole);
router.route('/:id')
    .get(user_roles_controller_1.getUserRole)
    .delete(user_roles_controller_1.deleteUserRole)
    .put(user_roles_controller_1.updateUserRole);
exports.default = router;
