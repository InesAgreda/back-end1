import {Request, Response} from 'express';
import {dao} from '../dao/indexDAO';

class IndexController {

    public async lista(req: Request, res: Response): Promise<void> {
        // const result = await dao.test();
        // res.json(result);
        res.json({message : "API WORKS"})
    }

    insertar(req: Request, res: Response): void {
        res.json({message: "INSERT DATA"});
    }

    actualizar(req: Request, res: Response): void {
        res.json({message: "UPDATE DATA"});
    }

    eliminar(req: Request, res: Response): void {
        res.json({message: "DELETE DATA"});
    }

}

export const indexController = new IndexController();