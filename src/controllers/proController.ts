import { Request, Response } from 'express';
import { dao } from '../dao/proDAO';
import { utils } from '../utils/utils';

class ProController {
    /**

     */
    public async lista(req: Request, res: Response) {
        try {
            const result = await dao.lista();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    /**

     */
    public async insert(req: Request, res: Response) {
        try {
            const { nombre,des,precio, rol, cveReg } = req.body;

            // Verificar parametros
            if (nombre == null || departFocus == null) {
                return res.status(409).json({ message: "Los campos son requeridos" });
            }

            // Verificar longitud de caracteres
            if(nombre.length > 350){
                return res.status(500).json({message : "La longitud maxima del nombre es de 350 caracteres"});
            }
            if (nombre == null || departFocus == null) {
                return res.status(409).json({ message: "Los campos son requeridos" });
            }
            // Verificar Rol
            const verifyRol = await dao.verificarRol(rol);
            if(verifyRol.length <= 0) {
                return res.status(500).json({message : "El rol no existe o no esta disponible"});
            }

            // Llamar objetos
            const user = {
                nombre,
                des,
                precio,
                rol,
                cveReg
            }

            // Insercion de datos
            const result = await dao.insert(user);

            if (result.affectedRows > 0) {
                return res.json({ message: "Producto guardado exitosamente" });
            } else {
                return res.status(409).json({ message: result.message });
            }
            res.json(result);
        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }
    
}

export const proController = new ProController();