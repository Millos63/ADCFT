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
exports.companyController = void 0;
const database_1 = __importDefault(require("../database"));
class CompanyController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield database_1.default.query('SELECT * FROM companies');
            res.json(companies);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO companies SET ?', [req.body]);
            res.json({ Text: 'Datos de la compania guardados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM companies WHERE idCompany = ?', [id]);
            res.json({ Text: 'Datos de la compania borrados ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE companies SET ? WHERE idCompany = ?', [req.body, id]);
            res.json({ Text: 'Datos de la compania actualizados' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const companies = yield database_1.default.query("SELECT * FROM companies WHERE idCompany = ?", [id]);
            if (companies.length > 0) {
                console.log(companies[0]);
                return res.json(companies[0]);
            }
            else {
                res.status(404).json({ text: 'Compania no existe' });
            }
        });
    }
}
exports.companyController = new CompanyController();
exports.default = exports.companyController;
