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
exports.cityController = void 0;
const database_1 = __importDefault(require("../database"));
class CityController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield database_1.default.query('SELECT * FROM cities');
            res.json(cities);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cities SET ?', [req.body]);
            res.json({ Text: 'Datos de la ciudad guardados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cities WHERE idCity = ?', [id]);
            res.json({ Text: 'Datos de la ciudad borrados ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cities SET ? WHERE idCity = ?', [req.body, id]);
            res.json({ Text: 'Datos de la ciudad actualizados' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cities = yield database_1.default.query("SELECT * FROM cities WHERE idCity = ?", [id]);
            if (cities.length > 0) {
                console.log(cities[0]);
                return res.json(cities[0]);
            }
            else {
                res.status(404).json({ text: 'Ciudad no existe' });
            }
        });
    }
}
exports.cityController = new CityController();
exports.default = exports.cityController;
