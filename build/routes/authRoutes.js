"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/', (req, res) => {res.send('GET AuthRoutes')});
        this.router.post('/', authController_1.authController.login);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
