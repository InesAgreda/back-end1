import pool from "../database/database";

class GeneralDao {

    public async roles() {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT r.cveRol, r.descripcion FROM rol r WHERE r.activo = ? ORDER BY r.descripcion ASC", [true])
        });

        return result;
    }

}
 export const dao = new GeneralDao();