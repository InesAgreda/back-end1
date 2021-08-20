import { Router } from 'express';
import {proController} from '../controllers/proController';
import { checkJwt } from '../middleware/jwt';
import { checkRol } from '../middleware/roles';

class ProRoutes {
    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {

        this.router.get('/', [checkJwt, checkRol([1])], proController.lista);
        this.router.put('/', [checkJwt, checkRol([1])], proController.insert);
        this.router.put('/', [checkJwt, checkRol([1])], proController.insert);
    }
}

const proRoutes = new ProRoutes();
export default proRoutes.router;