"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proController_1 = require("../controllers/proController");
const jwt_1 = require("../middleware/jwt");
const roles_1 = require("../middleware/roles");
class ProRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', [jwt_1.checkJwt, roles_1.checkRol([1])], proController_1.proController.lista);
        this.router.put('/', [jwt_1.checkJwt, roles_1.checkRol([1])], proController_1.proController.insert);
        this.router.put('/', [jwt_1.checkJwt, roles_1.checkRol([1])], proController_1.proController.insert);
    }
}
const proRoutes = new ProRoutes();
exports.default = proRoutes.router;
