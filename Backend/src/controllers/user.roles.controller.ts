import { Request,Response } from "express";
import { connect } from "../database";
import { userRoles } from "../interface/userRoles";

export async function getUserRoles(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const userRoles = await conn.query('SELECT * FROM usuarios_roles');
    return res.json(userRoles[0]);
};

export async function createUserRole(req:Request,res:Response){
    const newUserRole: userRoles = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO usuarios_roles SET ?',[newUserRole]);
    return res.json({
        message: 'User_Role created'
    });

};

export async function getUserRole(req:Request,res:Response):Promise<Response>{
    const id = req.params.id;
    const conn = await connect();
    const userRole = await conn.query('SELECT * FROM usuarios_roles WHERE id = ?',[id])
    return res.json(userRole[0]);
};

export async function deleteUserRole(req:Request,res:Response){
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM usuarios_roles WHERE id = ?',[id])
    return res.json({
        message:'User_Role deleted'
    });

};

export async function updateUserRole(req:Request,res:Response){
    const id = req.params.id;
    const updateUserRole: userRoles = req.body;
    const conn = await connect();
    await conn.query('UPDATE usuarios_roles set ? WHERE id = ?',[updateUserRole,id])
    return res.json({
        message:' User_Role updated'
    });
};