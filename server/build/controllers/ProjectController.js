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
exports.projectController = void 0;
const database_1 = __importDefault(require("../database"));
class ProjectController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield database_1.default.query('SELECT * FROM projects');
            res.json(projects);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO projects SET ? ', [req.body]);
            res.json({ Text: 'Datos de proyecto guardados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM projects WHERE idProject = ? ', [id]);
            res.json({ Text: 'Datos de proyecto Eliminados' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE projects SET ? WHERE idProject = ? ', [req.body, id]);
            res.json({ Text: "Datos de proyecto actualizados" + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const projects = yield database_1.default.query('SELECT * FROM projects WHERE idProject = ? ', [id]);
            if (projects.length > 0) {
                console.log(projects[0]);
                return res.json(projects[0]);
            }
            else {
                res.status(404).json({ Text: 'Proyecto no existe' });
            }
        });
    }
}
exports.projectController = new ProjectController();
exports.default = exports.projectController;
