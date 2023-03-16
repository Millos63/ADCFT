import {Router} from 'express';
import {projectController} from "../controllers/ProjectController";

class ProjectRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', projectController.index);
        this.router.post('/', projectController.create);
        this.router.delete('/:id', projectController.delete);
        this.router.put('/:id', projectController.update);
        this.router.get('/:id', projectController.detail);


    }
}
const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;
