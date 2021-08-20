"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dao = void 0;
const database_1 = __importDefault(require("../database/database"));
class proDAO {
    lista() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT u.cvePro, u.nombre, u.des, u.precio, u.cveReg, u.rol, r.descripcion as rol FROM producto u JOIN rol r ON r.cveRol = u.rol ORDER BY u.nombre ASC");
            }));
            return result;
        });
    }
    verificarRol(cveRol) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM rol WHERE cveRol = ? AND activo = ?', [cveRol, true]);
            }));
            return result;
        });
    }
    insert(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("INSERT INTO producto SET ?", [user]);
            }));
            return result;
        });
    }
}
exports.dao = new proDAO();
