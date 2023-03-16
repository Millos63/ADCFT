import { Request, Response } from "express";
import pool from "../database"

class EmployeeController{
    public async index(req:Request, res: Response){
        const employees = await pool.query('SELECT * FROM employees')
        res.json(employees)
    }
    
    public async create(req:Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO employees SET ? ', [req.body]);
        res.json({Text: 'Datos de Empleado guardados'});
    }

    public async delete(req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM employees WHERE idEmployee = ? ', [id]);
        res.json({Text: 'Datos de Empleado Eliminados' + id});
    }

    public async update(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE employees SET ? WHERE idEmployee = ? ', [req.body, id]);
        res.json({Text:"Datos de Empleado actualizados" + id});
    }

    public async detail(req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const employees = await pool.query('SELECT * FROM employees WHERE idEmployee = ? ', [id]);
        if(employees.length > 0){
            console.log(employees[0]);
            return res.json(employees[0]);
        }
        else 
        {
            res.status(404).json({Text: 'Empleado no existe'});
        }
    }
}

export const employeeController = new EmployeeController();
export default employeeController;

