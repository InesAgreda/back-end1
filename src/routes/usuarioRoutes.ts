import { Router } from 'express';
import {usuarioController} from '../controllers/usuarioController';
import { checkJwt } from '../middleware/jwt';
import { checkRol } from '../middleware/roles';

class UsuarioRoutes {
    public router: Router = Router();

    constructor() { 
        this.config();
    }

    config(): void {
        this.router.get('/', [checkJwt, checkRol([1])], usuarioController.lista);
        this.router.put('/', [checkJwt, checkRol([1])], usuarioController.insert);
        this.router.post('/', [checkJwt, checkRol([1])], usuarioController.update);
        this.router.delete('/:cvePro', [checkJwt, checkRol([1])], usuarioController.delete);
    }
}

const usuariosRoutes = new UsuarioRoutes();
export default usuariosRoutes.router;