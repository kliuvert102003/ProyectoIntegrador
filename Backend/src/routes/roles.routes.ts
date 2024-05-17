import { Router } from "express";
const router = Router();
import { getRoles,createRole, getRole, deleteRole,updateRole } from "../controllers/roles.controller";

router.route('/')
    .get(getRoles)
    .post(createRole)

router.route('/:roleId')
    .get(getRole)
    .delete(deleteRole)
    .put(updateRole)


export default router;