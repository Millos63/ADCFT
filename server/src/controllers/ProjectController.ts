import { Request, Response } from "express";
import pool from "../database"

class ProjectController{
    public async index(req:Request, res: Response){
        const projects = await pool.query('SELECT * FROM projects')
        res.json(projects)
    }
    
    public async create(req:Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO projects SET ? ', [req.body]);
        res.json({Text: 'Datos de proyecto guardados'});
    }

    public async delete(req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM projects WHERE idProject = ? ', [id]);
        res.json({Text: 'Datos de proyecto Eliminados' + id});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE projects SET ? WHERE idProject = ? ', [req.body, id]);
        res.json({Text:"Datos de proyecto actualizados" + id});
    }

    public async detail(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const projects = await pool.query('SELECT * FROM projects WHERE idProject = ? ', [id]);
        if(projects.length > 0){
            console.log(projects[0]);
            return res.json(projects[0]);
        }
        else 
        {
            res.status(404).json({Text: 'Proyecto no existe'});
        }
    }
}

export const projectController = new ProjectController();
export default projectController;

