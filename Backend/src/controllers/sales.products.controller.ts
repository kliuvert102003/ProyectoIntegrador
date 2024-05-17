import { Request,Response } from "express";
import { connect } from "../database";
import { SalesProducts } from "../interface/salesProducts";

export async function getsalesProducts(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const salesProducts = await conn.query('SELECT * FROM ventas_productos');
    return res.json(salesProducts[0]);
};

export async function createSaleProduct(req:Request,res:Response){
    const newSaleProduct: SalesProducts = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO ventas_productos SET ?',[newSaleProduct]);
    return res.json({
        message: 'Sale_Product created'
    });

};

export async function getSaleProduct(req:Request,res:Response):Promise<Response>{
    const id = req.params.id;
    const conn = await connect();
    const saleProduct = await conn.query('SELECT * FROM ventas_productos WHERE id = ?',[id])
    return res.json(saleProduct[0]);
};

export async function deleteSaleProduct(req:Request,res:Response){
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM ventas_productos WHERE id = ?',[id])
    return res.json({
        message:'Sale_Product deleted'
    });

};

export async function updateSaleProduct(req:Request,res:Response){
    const id = req.params.id;
    const updateSaleProduct: SalesProducts = req.body;
    const conn = await connect();
    await conn.query('UPDATE ventas_productos set ? WHERE id = ?',[updateSaleProduct,id])
    return res.json({
        message:'Sale_Product updated'
    });
};