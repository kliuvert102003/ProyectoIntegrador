import { Request,Response } from "express";
import { connect } from "../database";
import { Products } from "../interface/Products";

export async function getProducts(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const products = await conn.query('SELECT * FROM productos');
    return res.json(products[0]);
};

export async function createProduct(req:Request,res:Response){
    const newProducts: Products = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO productos SET ?',[newProducts]);
    return res.json({
        message: 'Product created'
    });

};

export async function getProduct(req:Request,res:Response):Promise<Response>{
    const id = req.params.productId;
    const conn = await connect();
    const products = await conn.query('SELECT * FROM productos WHERE id = ?',[id])
    return res.json(products[0]);
};

export async function deleteProduct(req:Request,res:Response){
    const id = req.params.productId;
    const conn = await connect();
    await conn.query('DELETE FROM productos WHERE id = ?',[id])
    return res.json({
        message:'Product deleted'
    });

};

export async function updateProduct(req:Request,res:Response){
    const id = req.params.productId;
    const updateProduct: Products = req.body;
    const conn = await connect();
    await conn.query('UPDATE productos set ? WHERE id = ?',[updateProduct,id])
    return res.json({
        message:'Product updated'
    });
};