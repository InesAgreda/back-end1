import { token } from "morgan";
import pool from "../database/database";

class UsuarioDAO {
    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT u.cvePro, u.nombre, u.des,u.precio, u.cveReg, u.rol, r.descripcion as rol FROM producto u JOIN rol r ON r.cveRol = u.rol ORDER BY u.nombre ASC");
        });

        return result;
    }

    public async verificarUsuario(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT cveUsuario FROM usuario WHERE username = ?', [usuario]);
        });

        return result;
    }

    public async verificarRol(cveRol: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM rol WHERE cveRol = ? AND activo = ?', [cveRol, true]);
        });

        return result;
    }

    public async insert(user: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO producto SET ?", [user]);
        });
        return result;
        
    }

    public async update(user: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("UPDATE producto SET ? WHERE cvePro = ?", [user, user.cvePro]);
        });
        return result;
    }
    
    public async delete(cvePro: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("DELETE FROM producto WHERE cvePro = ?", [cvePro]);
        });
        return result;
        
    }

}

export const dao = new UsuarioDAO();