"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generalController_1 = require("../controllers/generalController");
class GeneralRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Obtiene los roles activo en el sistema
        this.router.get('/rol', generalController_1.generalController.roles);
    }
}
const generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
