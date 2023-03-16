import { Router } from "express";
import {employeeController} from "../controllers/EmployeeController"

class EmployeeRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', employeeController.index);
        this.router.post('/', employeeController.create);
        this.router.delete('/:id', employeeController.delete);
        this.router.put('/:id', employeeController.update);
        this.router.get('/:id', employeeController.detail);
    }
}

export const employeeRoutes = new EmployeeRoutes();
export default employeeRoutes.router;
