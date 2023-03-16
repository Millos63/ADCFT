import { Request, Response } from "express";
import pool from "../database"

class CompanyController{
    public async index(req:Request, res:Response){
        const companies = await pool.query('SELECT * FROM companies')
        res.json(companies);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO companies SET ?', [req.body]);
        res.json({Text: 'Datos de la compania guardados'});
    }

    public async delete(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM companies WHERE idCompany = ?',[id]);
        res.json({Text: 'Datos de la compania borrados ' + id}); 
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE companies SET ? WHERE idCompany = ?', [req.body, id]);
        res.json({Text: 'Datos de la compania actualizados' + id});
    }

    public async detail(req:Request, res: Response):Promise<any>{
        const {id} = req.params;
        const companies = await pool.query("SELECT * FROM companies WHERE idCompany = ?", [id]);
        if(companies.length > 0){
            console.log(companies[0]);
            return res.json(companies[0]);
        }
        else
        {
            res.status(404).json({text: 'Compania no existe'});
        }
    }

}

export const companyController = new CompanyController();
export default companyController;