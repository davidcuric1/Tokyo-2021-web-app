"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lokacija_controller_1 = require("../controllers/lokacija.controller");
const lokacijaRouter = express_1.default.Router();
lokacijaRouter.route('/dohvati_sve').get((req, res) => new lokacija_controller_1.LokacijaController().dohvati_sve(req, res));
exports.default = lokacijaRouter;
//# sourceMappingURL=lokacija.routes.js.map