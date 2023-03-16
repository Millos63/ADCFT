"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = require("express");
const ContactController_1 = require("../controllers/ContactController");
class ContactRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ContactController_1.contactController.index);
        this.router.post('/', ContactController_1.contactController.create);
        this.router.delete('/:id', ContactController_1.contactController.delete);
        this.router.put('/:id', ContactController_1.contactController.update);
        this.router.get('/:id', ContactController_1.contactController.detail);
    }
}
exports.contactRoutes = new ContactRoutes();
exports.default = exports.contactRoutes.router;
