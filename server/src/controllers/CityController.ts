import { Request, Response } from "express";
import pool from "../database"

class CityController{
    public async index(req:Request, res:Response){
        const cities = await pool.query('SELECT * FROM cities')
        res.json(cities);
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO cities SET ?', [req.body]);
        res.json({Text: 'Datos de la ciudad guardados'});
    }

    public async delete(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM cities WHERE idCity = ?',[id]);
        res.json({Text: 'Datos de la ciudad borrados ' + id}); 
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE cities SET ? WHERE idCity = ?', [req.body, id]);
        res.json({Text: 'Datos de la ciudad actualizados' + id});
    }

    public async detail(req:Request, res: Response):Promise<any>{
        const {id} = req.params;
        const cities = await pool.query("SELECT * FROM cities WHERE idCity = ?", [id]);
        if(cities.length > 0){
            console.log(cities[0]);
            return res.json(cities[0]);
        }
        else
        {
            res.status(404).json({text: 'Ciudad no existe'});
        }
    }

}

export const cityController = new CityController();
export default cityController;