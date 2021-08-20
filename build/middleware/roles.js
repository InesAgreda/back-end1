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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRol = void 0;
const authDao_1 = require("../dao/authDao");
const checkRol = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { cveUsuario } = res.locals.jwtPayLoad;
            const lstUsers = yield authDao_1.dao.getUserById(cveUsuario);
            for (let user of lstUsers) {
                if (roles.includes(user.cveRol)) {
                    next();
                }
                else {
                    res.status(404).json({ message: "No autorizado" });
                }
            }
        }
        catch (error) {
            res.status(404).json({ message: "No autorizado" });
        }
    });
};
exports.checkRol = checkRol;
