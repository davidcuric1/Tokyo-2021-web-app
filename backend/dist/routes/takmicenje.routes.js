"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const takmicenje_controller_1 = require("../controllers/takmicenje.controller");
const takmicenjeRouter = express_1.default.Router();
takmicenjeRouter.route('/dohvati_format_turnira').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_format_turnira(req, res));
takmicenjeRouter.route('/dohvati_zbir_rezultata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_zbir_rezultata(req, res));
takmicenjeRouter.route('/dohvati_najbolji_rezultat_sportiste').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_najbolji_rezultat_sportiste(req, res));
takmicenjeRouter.route('/dohvati_finalne_rezultate').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_finalne_rezultate(req, res));
takmicenjeRouter.route('/dohvati_format_takmicenja').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_format_takmicenja(req, res));
takmicenjeRouter.route('/doh_rez').get((req, res) => new takmicenje_controller_1.TakmicenjeController().doh_rez(req, res));
takmicenjeRouter.route('/unos_datkraja').post((req, res) => new takmicenje_controller_1.TakmicenjeController().unos_datkraja(req, res));
takmicenjeRouter.route('/unos_rezultata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().unos_rezultata(req, res));
takmicenjeRouter.route('/uvecaj_rundu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().uvecaj_rundu(req, res));
takmicenjeRouter.route('/dohvati_rundu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_rundu(req, res));
takmicenjeRouter.route('/dohvati_takmicenja_za_unos_rezultata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_takmicenja_za_unos_rezultata(req, res));
takmicenjeRouter.route('/unesi_rundu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().unesi_rundu(req, res));
takmicenjeRouter.route('/dodaj_takmicenje').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dodaj_takmicenje(req, res));
takmicenjeRouter.route('/proveri_disciplinu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().proveri_disciplinu(req, res));
takmicenjeRouter.route('/dohvati_takmicenja_delegata').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dohvati_takmicenja_delegata(req, res));
takmicenjeRouter.route('/unos_datum_vreme_lokacija').post((req, res) => new takmicenje_controller_1.TakmicenjeController().unos_datum_vreme_lokacija(req, res));
takmicenjeRouter.route('/provera_datum_vreme_lokacija').post((req, res) => new takmicenje_controller_1.TakmicenjeController().provera_datum_vreme_lokacija(req, res));
exports.default = takmicenjeRouter;
//# sourceMappingURL=takmicenje.routes.js.map