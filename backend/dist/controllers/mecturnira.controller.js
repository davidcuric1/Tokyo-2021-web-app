"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MecTurniraController = void 0;
const mecturnira_1 = __importDefault(require("../models/mecturnira"));
class MecTurniraController {
    constructor() {
        this.unesi_rezultat = (req, res) => {
            let igrac1 = req.body.igrac1;
            let igrac2 = req.body.igrac2;
            let rezultat = req.body.rezultat;
            mecturnira_1.default.updateOne({ 'igrac1': igrac1, 'igrac2': igrac2 }, { $set: { 'rezultat': rezultat } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.dohvati_meceve_sa_terminom = (req, res) => {
            let disciplina = req.body.disciplina;
            let runda = req.body.runda;
            let id_delegata = req.body.id_delegata;
            let pol = req.body.pol;
            mecturnira_1.default.find({ 'disciplina': disciplina, 'runda': runda, 'id_delegata': id_delegata, 'datpocetka': { $ne: null }, 'rezultat': null, 'pol': pol }, (err, mecevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(mecevi);
            });
        };
        this.provera_datum_vreme_lokacija = (req, res) => {
            let datpocetka = req.body.datpocetka;
            let lokacija = req.body.lokacija;
            let vreme = req.body.vreme;
            mecturnira_1.default.findOne({ 'datpocetka': datpocetka, 'vreme': vreme, 'lokacija': lokacija }, (err, data) => {
                if (data)
                    res.json({ 'message': 'postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.unos_datum_vreme_lokacija = (req, res) => {
            let igrac1 = req.body.igrac1;
            let igrac2 = req.body.igrac2;
            let datpocetka = req.body.datpocetka;
            let lokacija = req.body.lokacija;
            let vreme = req.body.vreme;
            mecturnira_1.default.updateOne({ 'igrac1': igrac1, 'igrac2': igrac2 }, { $set: { 'datpocetka': datpocetka, 'lokacija': lokacija, 'vreme': vreme } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.dohvati_meceve = (req, res) => {
            let disciplina = req.body.disciplina;
            let runda = req.body.runda;
            let id_delegata = req.body.id_delegata;
            let pol = req.body.pol;
            mecturnira_1.default.find({ 'disciplina': disciplina, 'runda': runda, 'id_delegata': id_delegata, 'datpocetka': null, 'pol': pol }, (err, mecevi) => {
                if (err)
                    console.log(err);
                else
                    res.json(mecevi);
            });
        };
        this.dodaj_mec = (req, res) => {
            let mec = new mecturnira_1.default(req.body);
            // console.log(" consossssssssssle.log(req.body);"); 
            console.log(req.body);
            mec.save().then((mec) => {
                res.status(200).json({ 'message': 'mec dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
    }
}
exports.MecTurniraController = MecTurniraController;
//# sourceMappingURL=mecturnira.controller.js.map