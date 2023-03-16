import {Router} from 'express';
import { companyController} from "../controllers/CompanyController";

class CompanyRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', companyController.index);
        this.router.post('/', companyController.create);
        this.router.delete('/:id', companyController.delete);
        this.router.put('/:id', companyController.update);
        this.router.get('/:id', companyController.detail);


    }
}
const companyRoutes = new CompanyRoutes();
export default companyRoutes.router;
