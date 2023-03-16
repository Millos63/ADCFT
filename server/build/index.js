"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Nuestras rutas creadas importadas para poder hacer uso de ellas 
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const CompanyRoutes_1 = __importDefault(require("./routes/CompanyRoutes"));
const ContactRoutes_1 = __importDefault(require("./routes/ContactRoutes"));
const CityRoutes_1 = __importDefault(require("./routes/CityRoutes"));
const EmployeeRoutes_1 = __importDefault(require("./routes/EmployeeRoutes"));
const ProjectRoutes_1 = __importDefault(require("./routes/ProjectRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/companies', CompanyRoutes_1.default);
        this.app.use('/api/contacts', ContactRoutes_1.default);
        this.app.use('/api/cities', CityRoutes_1.default);
        this.app.use('/api/employees', EmployeeRoutes_1.default);
        this.app.use('/api/projects', ProjectRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => { console.log("Servidor en el puerto", this.app.get('port')); });
    }
}
const server = new Server();
server.start();
