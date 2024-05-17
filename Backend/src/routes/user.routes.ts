import { Router } from "express";
const router = Router();

import { getUsers, createUser, getUser, deleteUser,updateUser } from "../controllers/users.controller";

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

export default router;