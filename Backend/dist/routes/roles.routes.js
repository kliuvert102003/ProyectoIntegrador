"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const roles_controller_1 = require("../controllers/roles.controller");
router.route('/')
    .get(roles_controller_1.getRoles)
    .post(roles_controller_1.createRole);
router.route('/:roleId')
    .get(roles_controller_1.getRole)
    .delete(roles_controller_1.deleteRole)
    .put(roles_controller_1.updateRole);
exports.default = router;
