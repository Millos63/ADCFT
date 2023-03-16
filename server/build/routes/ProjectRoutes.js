"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = require("../controllers/ProjectController");
class ProjectRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ProjectController_1.projectController.index);
        this.router.post('/', ProjectController_1.projectController.create);
        this.router.delete('/:id', ProjectController_1.projectController.delete);
        this.router.put('/:id', ProjectController_1.projectController.update);
        this.router.get('/:id', ProjectController_1.projectController.detail);
    }
}
const projectRoutes = new ProjectRoutes();
exports.default = projectRoutes.router;
