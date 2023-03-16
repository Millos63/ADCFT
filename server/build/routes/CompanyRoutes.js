"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = require("../controllers/CompanyController");
class CompanyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CompanyController_1.companyController.index);
        this.router.post('/', CompanyController_1.companyController.create);
        this.router.delete('/:id', CompanyController_1.companyController.delete);
        this.router.put('/:id', CompanyController_1.companyController.update);
        this.router.get('/:id', CompanyController_1.companyController.detail);
    }
}
const companyRoutes = new CompanyRoutes();
exports.default = companyRoutes.router;
