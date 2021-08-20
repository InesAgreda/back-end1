import pool from "../database/database";

class proDAO {
    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT u.cvePro, u.nombre, u.des, u.precio, u.cveReg, u.rol, r.descripcion as rol FROM producto u JOIN rol r ON r.cveRol = u.rol ORDER BY u.nombre ASC");
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
}

export const dao = new proDAO();