"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CityController_1 = require("../controllers/CityController");
class CityRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CityController_1.cityController.index);
        this.router.post('/', CityController_1.cityController.create);
        this.router.delete('/:id', CityController_1.cityController.delete);
        this.router.put('/:id', CityController_1.cityController.update);
        this.router.get('/:id', CityController_1.cityController.detail);
    }
}
const cityRoutes = new CityRoutes();
exports.default = cityRoutes.router;
