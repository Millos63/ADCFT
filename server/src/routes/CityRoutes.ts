import {Router} from 'express';
import {cityController} from "../controllers/CityController";

class CityRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', cityController.index);
        this.router.post('/', cityController.create);
        this.router.delete('/:id', cityController.delete);
        this.router.put('/:id', cityController.update);
        this.router.get('/:id', cityController.detail);


    }
}
const cityRoutes = new CityRoutes();
export default cityRoutes.router;
