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
exports.contactController = void 0;
const database_1 = __importDefault(require("../database"));
class ContactController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield database_1.default.query('SELECT * FROM contacts');
            res.json(contacts);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO contacts SET ? ', [req.body]);
            res.json({ Text: 'Datos de contacto guardados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM contacts WHERE idContact = ? ', [id]);
            res.json({ Text: 'Datos de contacto Eliminados' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE contacts SET ? WHERE idContact = ? ', [req.body, id]);
            res.json({ Text: "Datos de contacto actualizados" + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const contacts = yield database_1.default.query('SELECT * FROM contacts WHERE idContact = ? ', [id]);
            if (contacts.length > 0) {
                console.log(contacts[0]);
                return res.json(contacts[0]);
            }
            else {
                res.status(404).json({ Text: 'Contacto no existe' });
            }
        });
    }
}
exports.contactController = new ContactController();
exports.default = exports.contactController;
