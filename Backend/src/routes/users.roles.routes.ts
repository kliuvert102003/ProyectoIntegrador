import { Router } from "express";
const router = Router();
import { getUserRoles, createUserRole, getUserRole, deleteUserRole, updateUserRole } from "../controllers/user.roles.controller";

router.route('/')
    .get(getUserRoles)
    .post(createUserRole)

router.route('/:id')
    .get(getUserRole)
    .delete(deleteUserRole)
    .put(updateUserRole)



export default router;