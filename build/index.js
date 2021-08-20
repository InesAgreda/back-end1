"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// routes
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const proRoutes_1 = __importDefault(require("./routes/proRoutes"));
const generalRoutes_1 = __importDefault(require("./routes/generalRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // Configuración del servidor
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // rutas para mi APIRest
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/auth', authRoutes_1.default);
        this.app.use('/usuario', usuarioRoutes_1.default);
        this.app.use('/producto', proRoutes_1.default);
        this.app.use('/general', generalRoutes_1.default);
    }
    // Inicialiazación del servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
