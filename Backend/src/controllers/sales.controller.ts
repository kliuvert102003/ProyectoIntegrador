import { Request,Response } from "express";
import { connect } from "../database";
import { Sales } from "../interface/Sales";

export async function getSales(req:Request,res:Response):Promise<Response>{
    const conn = await connect();
    const sales = await conn.query('SELECT * FROM ventas');
    return res.json(sales[0]);
};

export async function createSale(req:Request,res:Response){
    const newSale: Sales = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO ventas SET ?',[newSale]);
    return res.json({
        message: 'Sale created'
    });

};

export async function getSale(req:Request,res:Response):Promise<Response>{
    const id = req.params.saleId;
    const conn = await connect();
    const sale = await conn.query('SELECT * FROM ventas WHERE id = ?',[id])
    return res.json(sale[0]);
};

export async function deleteSale(req:Request,res:Response){
    const id = req.params.saleId;
    const conn = await connect();
    await conn.query('DELETE FROM ventas WHERE id = ?',[id])
    return res.json({
        message:'Sale deleted'
    });

};

export async function updateSale(req:Request,res:Response){
    const id = req.params.saleId;
    const updatesale: Sales = req.body;
    const conn = await connect();
    await conn.query('UPDATE ventas set ? WHERE id = ?',[updatesale,id])
    return res.json({
        message:'Sale updated'
    });
};