"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mecturnira_controller_1 = require("../controllers/mecturnira.controller");
const mecTurniraRouter = express_1.default.Router();
mecTurniraRouter.route('/unesi_rezultat').post((req, res) => new mecturnira_controller_1.MecTurniraController().unesi_rezultat(req, res));
mecTurniraRouter.route('/dohvati_meceve_sa_terminom').post((req, res) => new mecturnira_controller_1.MecTurniraController().dohvati_meceve_sa_terminom(req, res));
mecTurniraRouter.route('/dodaj_mec').post((req, res) => new mecturnira_controller_1.MecTurniraController().dodaj_mec(req, res));
mecTurniraRouter.route('/dohvati_meceve').post((req, res) => new mecturnira_controller_1.MecTurniraController().dohvati_meceve(req, res));
mecTurniraRouter.route('/unos_datum_vreme_lokacija').post((req, res) => new mecturnira_controller_1.MecTurniraController().unos_datum_vreme_lokacija(req, res));
mecTurniraRouter.route('/provera_datum_vreme_lokacija').post((req, res) => new mecturnira_controller_1.MecTurniraController().provera_datum_vreme_lokacija(req, res));
exports.default = mecTurniraRouter;
//# sourceMappingURL=mecturnira.routes.js.map