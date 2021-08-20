import { Request, Response } from 'express';
import { dao } from '../dao/usuarioDAO';
import { utils } from '../utils/utils';

class UsuarioController {
    /**
     *  Nombre: lista
     *  Descripcion: lista de usuarios de la base de datos
     *  Resultado: json con informacion de  usuarios registrados.
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
     *  Nombre: insert
     *  Descripcion: insertar datos de un nuevo usuario
     *  Resultado: json con mensaje.
     */
    public async insert(req: Request, res: Response) {
        try {
            const { nombre, des,precio, rol, cveReg} = req.body;

            // Verificar parametros
            if (nombre == null || des == null) {
                return res.status(409).json({ message: "Los campos son requeridos" });
            }

            // Verificar nombre longitud de caracteres
            if(nombre.length > 350){
                return res.status(500).json({message : "La longitud maxima del nombre es de 350 caracteres"});
            }

            
            if(des.length > 500){
                return res.status(500).json({message : "La longitud maxima del nombre es de 500 caracteres"});
            }

            if (nombre == null || precio == null) {
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

    //update
    public async update(req: Request, res: Response) {
        try {

            const usuario = req.body;

            if(usuario.cvePro == null){
                return res.status(400).json({message : "No se puede actualizar"});
            }

            const result = await dao.update(usuario);
            if(result.affectedRows > 0){
                res.json({message : "El producto se ha actualizado de manera correcta."});
            }else{
                res.status(400).json({message : result.message});
            }

            

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

    //Eliminar
    public async delete(req: Request, res: Response) {
        try {
            const { cvePro} = req.params;

            if(cvePro == null){
                return res.status(400).json({ message: "No se pude eliminar" });
            }


            // delete
            const result = await dao.delete(cvePro);
            if (result.affectedRows > 0) {
                return res.json({ message: "Producto eliminado exitosamente" });
            } else {
                return res.status(400).json({ message: result.message });
            }
            res.json(result);

        } catch (ex) {
            res.status(500).json({ message: ex.message });
        }
    }

}

export const usuarioController = new UsuarioController();