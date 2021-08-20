import { Router } from "express";
import { generalController } from '../controllers/generalController';

class GeneralRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Obtiene los roles activo en el sistema
        this.router.get('/rol', generalController.roles);
    }

}

const generalRoutes = new GeneralRoutes();
export default generalRoutes.router;