import { NextFunction, Request, Response } from "express";
import { dao } from '../dao/authDao';

export const checkRol = (roles: Array<Number>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { cveUsuario } = res.locals.jwtPayLoad;

            const lstUsers = await dao.getUserById(cveUsuario);
            for (let user of lstUsers) {
                if(roles.includes(user.cveRol)){
                    next();
                } else {
                    res.status(404).json({ message: "No autorizado" });
                }
            }
        } catch (error) {
            res.status(404).json({ message: "No autorizado" });
        }
    }
}
