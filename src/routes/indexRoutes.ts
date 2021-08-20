import {Router} from 'express';
import { indexController } from '../controllers/indexController';
import { checkJwt } from '../middleware/jwt';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
     }

    config(): void {
        this.router.get('/', indexController.lista);
        this.router.post('/', [checkJwt], indexController.actualizar);
        this.router.put('/', [checkJwt], indexController.insertar);
        this.router.delete('/', [checkJwt],  indexController.eliminar);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;