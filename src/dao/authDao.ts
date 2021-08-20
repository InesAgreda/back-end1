import pool from '../database/database'

class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario JOIN rol ON usuario.cveRol = rol.cveRol WHERE username = ?', [usuario]);
        });

        return result;
    }

    public async getUserById(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE cveUsuario = ?', [cveUsuario]);
        });

        return result;
    }

}

export const dao = new AuthDAO();