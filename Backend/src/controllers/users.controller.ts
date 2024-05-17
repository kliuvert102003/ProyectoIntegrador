import { Request,Response } from "express";
import { connect } from "../database";
import { Users } from "../interface/Users";
import bcrypt from 'bcryptjs';


//Mostrar Usuarios
export async function getUsers(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios');
    return res.json(users[0]);
};

//Crear usuarios
export async function createUser(req:Request,res:Response){
    const newUser:Users = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO usuarios SET ?`,[newUser]);
    return res.json({
        message: 'User Created'
    });
};

//Mostrar un solo usuario
export async function getUser(req:Request,res:Response):Promise<Response>{
    const id = req.params.userId;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return res.json(users[0]);

};

//Eliminar usuarios
export async function deleteUser(req:Request,res:Response){
    const id = req.params.userId;
    const conn = await connect();
    await conn.query('DELETE  FROM usuarios WHERE id = ?', [id]);
    return res.json({
        message: "User deleted"
    });
};

export async function updateUser(req:Request,res:Response){
    const id = req.params.userId;
    const updateUser:Users = req.body;
    const conn = await connect();
    await conn.query('UPDATE usuarios set ? WHERE id = ?', [updateUser,id]);
    return res.json({
        message: "User updated"
    });


}





