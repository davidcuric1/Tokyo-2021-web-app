"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/uvecaj_broj_takmicenja').post((req, res) => new korisnik_controller_1.KorisnikController().uvecaj_broj_takmicenja(req, res));
korisnikRouter.route('/dohvati_sve_korisnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvati_sve_korisnike(req, res));
korisnikRouter.route('/dohvati_neodobrene').get((req, res) => new korisnik_controller_1.KorisnikController().dohvati_neodobrene(req, res));
korisnikRouter.route('/obrisi_korisnika').post((req, res) => new korisnik_controller_1.KorisnikController().obrisi_korisnika(req, res));
korisnikRouter.route('/odobri_korisnika').post((req, res) => new korisnik_controller_1.KorisnikController().odobri_korisnika(req, res));
korisnikRouter.route('/uvecaj_brtak').post((req, res) => new korisnik_controller_1.KorisnikController().uvecaj_brtak(req, res));
korisnikRouter.route('/dohvati_delegate').get((req, res) => new korisnik_controller_1.KorisnikController().dohvati_delegate(req, res));
korisnikRouter.route('/prijava').post((req, res) => new korisnik_controller_1.KorisnikController().prijava(req, res));
korisnikRouter.route('/promena_lozinke').post((req, res) => new korisnik_controller_1.KorisnikController().promena_lozinke(req, res));
korisnikRouter.route('/registracija').post((req, res) => new korisnik_controller_1.KorisnikController().registracija(req, res));
korisnikRouter.route('/proveri_korisnicko').post((req, res) => new korisnik_controller_1.KorisnikController().proveri_korisnicko(req, res));
korisnikRouter.route('/proveri_vodju').post((req, res) => new korisnik_controller_1.KorisnikController().proveri_vodju(req, res));
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.routes.js.map