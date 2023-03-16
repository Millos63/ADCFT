import { Request, Response } from "express";
import pool from "../database"

class ContactController{
    public async index(req:Request, res: Response){
        const contacts = await pool.query('SELECT * FROM contacts')
        res.json(contacts)
    }
    
    public async create(req:Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO contacts SET ? ', [req.body]);
        res.json({Text: 'Datos de contacto guardados'});
    }

    public async delete(req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM contacts WHERE idContact = ? ', [id]);
        res.json({Text: 'Datos de contacto Eliminados' + id});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE contacts SET ? WHERE idContact = ? ', [req.body, id]);
        res.json({Text:"Datos de contacto actualizados" + id});
    }

    public async detail(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const contacts = await pool.query('SELECT * FROM contacts WHERE idContact = ? ', [id]);
        if(contacts.length > 0){
            console.log(contacts[0]);
            return res.json(contacts[0]);
        }
        else 
        {
            res.status(404).json({Text: 'Contacto no existe'});
        }
    }
}

export const contactController = new ContactController();
export default contactController;

