import { Request,Response } from "express";
import { Users } from "../interface/Users";
import { connect } from "../database";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

export const signup =async (req:Request,res:Response)=>{
    // saving a new user
    const newUser:Users = req.body;
    const {contrasena}:Users = req.body
    const conn = await connect();
    const salt = bcrypt.genSaltSync();
    bcrypt.hashSync(contrasena, salt);
    const saved_user = await conn.query(`INSERT INTO usuarios SET ?`,[newUser]);
    
    
    //token
    const token:string = jwt.sign({_id:saved_user},process.env.TOKEN_SECRET || 'Tokentest');
    return res.header('auth_token',token).json({
        saved_user: saved_user,
        message: "se registro con exito"
    })
    
    
};



export const signin = (req:Request,res:Response) =>{
    res.send('signin');

};

export const profile = (req:Request,res:Response) =>{
    res.send('profile');
};