"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtKey_1 = __importDefault(require("../config/jwtKey"));
const checkJwt = (req, res, next) => {
    const token = String(req.headers['auth']);
    let jwtPayLoad;
    try {
        jwtPayLoad = jsonwebtoken_1.default.verify(token, jwtKey_1.default.jwtSecret);
        res.locals.jwtPayLoad = jwtPayLoad;
    }
    catch (error) {
        return res.status(404).json({ message: "No autorizado" });
    }
    const { cveUsuario, username, cveRol, rol } = jwtPayLoad;
    const newToken = jsonwebtoken_1.default.sign({ cveUsuario, username, cveRol, rol }, jwtKey_1.default.jwtSecret, { expiresIn: '1h' });
    res.setHeader('token', newToken);
    next();
};
exports.checkJwt = checkJwt;
