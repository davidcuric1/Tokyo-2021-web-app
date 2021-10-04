"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakmicenjeController = void 0;
const rezultat_1 = __importDefault(require("../models/rezultat"));
const format_1 = __importDefault(require("../models/format"));
const runda_1 = __importDefault(require("../models/runda"));
const takmicenje_1 = __importDefault(require("../models/takmicenje"));
const formatTurnira_1 = __importDefault(require("../models/formatTurnira"));
class TakmicenjeController {
    constructor() {
        this.dohvati_zbir_rezultata = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            rezultat_1.default.aggregate([
                { $match: { disciplina: disciplina, pol: pol } },
                { $group: { _id: "$id_sportiste", ukupno: { $sum: "$rez" } } }
            ], (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dohvati_najbolji_rezultat_sportiste = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.body.id_sportiste;
            let disciplina = req.body.disciplina;
            const results = yield rezultat_1.default.find({ 'disciplina': disciplina, 'id_sportiste': id }).sort({ 'rez': -1 }).limit(1);
            // console.log(results);
            res.json(results);
        });
        this.dohvati_finalne_rezultate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            const results = yield rezultat_1.default.find({ 'disciplina': disciplina, 'pol': pol }).sort({ 'rez': -1 });
            // console.log(results);
            res.json(results);
        });
        this.unos_datkraja = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let datkraja = req.body.datkraja;
            takmicenje_1.default.updateOne({ 'disciplina': disciplina, 'pol': pol }, { $set: { 'datkraja': datkraja } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.unos_rezultata = (req, res) => {
            let rez = new rezultat_1.default(req.body);
            rez.save().then((rez) => {
                res.status(200).json({ 'message': 'rezultat dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.doh_rez = (req, res) => {
            rezultat_1.default.find({}, (err, rez) => {
                if (err)
                    console.log(err);
                else
                    res.json(rez);
            });
        };
        this.dohvati_format_turnira = (req, res) => {
            let disciplina = req.body.disciplina;
            formatTurnira_1.default.findOne({ 'disciplina': disciplina }, (err, format) => {
                if (err)
                    console.log(err);
                else
                    res.json(format);
            });
        };
        this.dohvati_format_takmicenja = (req, res) => {
            let disciplina = req.body.disciplina;
            format_1.default.findOne({ 'disciplina': disciplina }, (err, format) => {
                if (err)
                    console.log(err);
                else
                    res.json(format);
            });
        };
        this.dohvati_takmicenja_za_unos_rezultata = (req, res) => {
            let id = req.body.id;
            takmicenje_1.default.find({ 'id_delegata': id, 'datkraja': null, 'datpocetka': { $ne: null } }, (err, takmicenja) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicenja);
            });
        };
        this.uvecaj_rundu = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            console.log(disciplina);
            runda_1.default.updateOne({ 'disciplina': disciplina, 'pol': pol }, { $inc: { 'trenutnaRunda': 1 } }, resp => {
                res.json(resp);
            });
        };
        this.dohvati_rundu = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            runda_1.default.findOne({ 'disciplina': disciplina, 'pol': pol }, (err, runda) => {
                if (err)
                    console.log(err);
                else
                    res.json(runda);
            });
        };
        this.unesi_rundu = (req, res) => {
            let runda = new runda_1.default(req.body);
            runda.save().then((runda) => {
                res.status(200).json({ 'message': 'korisnik dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.provera_datum_vreme_lokacija = (req, res) => {
            let datpocetka = req.body.datpocetka;
            let lokacija = req.body.lokacija;
            let vreme = req.body.vreme;
            takmicenje_1.default.findOne({ 'datpocetka': datpocetka, 'vreme': vreme, 'lokacija': lokacija }, (err, data) => {
                if (data)
                    res.json({ 'message': 'postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.unos_datum_vreme_lokacija = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let datpocetka = req.body.datpocetka;
            let lokacija = req.body.lokacija;
            let vreme = req.body.vreme;
            takmicenje_1.default.updateOne({ 'disciplina': disciplina, 'pol': pol }, { $set: { 'datpocetka': datpocetka, 'lokacija': lokacija, 'vreme': vreme } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.dohvati_takmicenja_delegata = (req, res) => {
            let id = req.body.id;
            takmicenje_1.default.find({ 'id_delegata': id, /*'datpocetka':null,*/ 'datkraja': null, 'lokacija': null, 'vreme': null }, (err, takmicenja) => {
                if (err)
                    console.log(err);
                else
                    res.json(takmicenja);
            });
        };
        this.proveri_disciplinu = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            takmicenje_1.default.findOne({ 'disciplina': disciplina, 'pol': pol }, (err, data) => {
                if (data)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.dodaj_takmicenje = (req, res) => {
            console.log(req.body);
            let takmicenje = new takmicenje_1.default(req.body);
            // console.log(" consossssssssssle.log(req.body);"); 
            //console.log(req.body);
            takmicenje.save().then((takmicenje) => {
                res.status(200).json({ 'message': 'korisnik dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
    }
}
exports.TakmicenjeController = TakmicenjeController;
//# sourceMappingURL=takmicenje.controller.js.map