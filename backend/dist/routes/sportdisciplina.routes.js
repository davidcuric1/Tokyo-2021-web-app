"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportdisciplina_controller_1 = require("../controllers/sportdisciplina.controller");
const sportDisciplinaRouter = express_1.default.Router();
sportDisciplinaRouter.route('/dohvati_tip_rezultata_discipline').post((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().dohvati_tip_rezultata_discipline(req, res));
sportDisciplinaRouter.route('/dohvati_po_imenu').post((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().dohvati_po_imenu(req, res));
sportDisciplinaRouter.route('/dohvati_individualne').get((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().dohvati_individualne(req, res));
sportDisciplinaRouter.route('/dodaj').post((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().dodaj(req, res));
sportDisciplinaRouter.route('/proveri_disciplinu').post((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().proveri_disciplinu(req, res));
sportDisciplinaRouter.route('/proveri_sport').post((req, res) => new sportdisciplina_controller_1.SportDisciplinaController().proveri_sport(req, res));
exports.default = sportDisciplinaRouter;
//# sourceMappingURL=sportdisciplina.routes.js.map