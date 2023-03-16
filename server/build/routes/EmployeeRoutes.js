"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const express_1 = require("express");
const EmployeeController_1 = require("../controllers/EmployeeController");
class EmployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', EmployeeController_1.employeeController.index);
        this.router.post('/', EmployeeController_1.employeeController.create);
        this.router.delete('/:id', EmployeeController_1.employeeController.delete);
        this.router.put('/:id', EmployeeController_1.employeeController.update);
        this.router.get('/:id', EmployeeController_1.employeeController.detail);
    }
}
exports.employeeRoutes = new EmployeeRoutes();
exports.default = exports.employeeRoutes.router;
