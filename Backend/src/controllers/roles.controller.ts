import { Request,Response } from "express";
import { connect } from "../database";
import { Roles } from "../interface/Role";

export async function getRoles(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const roles = await conn.query('SELECT * FROM roles');
    return res.json(roles[0]);
};


export async function createRole(req:Request,res:Response){
    const newrole: Roles = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO roles SET ?',[newrole]);
    return res.json({
        message: 'Role created'
    });

};

export async function getRole(req:Request,res:Response):Promise<Response>{
    const id = req.params.roleId;
    const conn = await connect();
    const role = await conn.query('SELECT * FROM roles WHERE id = ?',[id])
    return res.json(role[0]);
};

export async function deleteRole(req:Request,res:Response){
    const id = req.params.roleId;
    const conn = await connect();
    await conn.query('DELETE FROM roles WHERE id = ?',[id])
    return res.json({
        message:'Role deleted'
    });

};

export async function updateRole(req:Request,res:Response){
    const id = req.params.roleId;
    const updateRole: Roles = req.body;
    const conn = await connect();
    await conn.query('UPDATE roles set ? WHERE id = ?',[updateRole,id])
    return res.json({
        message:'Role updated'
    });
};
