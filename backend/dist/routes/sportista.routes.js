"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportista_controller_1 = require("../controllers/sportista.controller");
const sportistaRouter = express_1.default.Router();
sportistaRouter.route('/dohvati_po_id').post((req, res) => new sportista_controller_1.SportistaController().dohvati_po_id(req, res));
sportistaRouter.route('/dodeli_medalju').post((req, res) => new sportista_controller_1.SportistaController().dodeli_medalju(req, res));
sportistaRouter.route('/dohvati_potencijalne_ucesnike').post((req, res) => new sportista_controller_1.SportistaController().dohvati_potencijalne_ucesnike(req, res));
sportistaRouter.route('/dodaj_disciplinu').post((req, res) => new sportista_controller_1.SportistaController().dodaj_disciplinu(req, res));
sportistaRouter.route('/proveri_drugi_sport').post((req, res) => new sportista_controller_1.SportistaController().proveri_drugi_sport(req, res));
sportistaRouter.route('/dohvati_drzave_ucesnice').get((req, res) => new sportista_controller_1.SportistaController().dohvati_drzave_ucesnice(req, res));
sportistaRouter.route('/dohvati_br_sportista_drzave').post((req, res) => new sportista_controller_1.SportistaController().dohvati_br_sportista_drzave(req, res));
sportistaRouter.route('/pretraga_sportista').post((req, res) => new sportista_controller_1.SportistaController().pretraga_sportista(req, res));
sportistaRouter.route('/dodaj_sportistu').post((req, res) => new sportista_controller_1.SportistaController().dodaj_sportistu(req, res));
exports.default = sportistaRouter;
//# sourceMappingURL=sportista.routes.js.map