"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RekordController = void 0;
const rekord_1 = __importDefault(require("../models/rekord"));
class RekordController {
    constructor() {
        this.apdejtuj_rekord = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let nacionalnost = req.body.nacionalnost;
            let rezultat = req.body.rezultat;
            let igre = "2020 Tokyo";
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            rekord_1.default.findOneAndUpdate({ 'disciplina': disciplina, 'pol': pol }, { $set: { 'ime': ime, 'prezime': prezime, 'nacionalnost': nacionalnost, 'rezultat': rezultat, 'igre': igre } }, (err, resp) => {
                if (err)
                    console.log(err);
                res.json(resp);
            });
        };
        this.dohvati_rekord = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            rekord_1.default.find({ 'disciplina': disciplina, 'pol': pol }, (err, rekordi) => {
                if (err)
                    console.log(err);
                else
                    res.json(rekordi);
            });
        };
        this.dohvati_sve_rekorde = (req, res) => {
            rekord_1.default.find({}, (err, rekordi) => {
                if (err)
                    console.log(err);
                else
                    res.json(rekordi);
            });
        };
    }
}
exports.RekordController = RekordController;
//# sourceMappingURL=rekord.controller.js.map