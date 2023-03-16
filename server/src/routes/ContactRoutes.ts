import { Router } from "express";
import {contactController} from "../controllers/ContactController"

class ContactRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', contactController.index);
        this.router.post('/', contactController.create);
        this.router.delete('/:id', contactController.delete);
        this.router.put('/:id', contactController.update);
        this.router.get('/:id', contactController.detail);
    }
}

export const contactRoutes = new ContactRoutes();
export default contactRoutes.router;
