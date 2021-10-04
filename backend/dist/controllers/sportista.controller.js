"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportistaController = void 0;
const sportista_1 = __importDefault(require("../models/sportista"));
class SportistaController {
    constructor() {
        this.dohvati_po_id = (req, res) => {
            let id = req.body.id;
            sportista_1.default.findOne({ '_id': id }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json(resp);
            });
        };
        this.dodeli_medalju = (req, res) => {
            let id = req.body.id;
            console.log(id);
            sportista_1.default.update({ '_id': id }, { $set: { 'osvojio_medalju': 1 } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.dohvati_potencijalne_ucesnike = (req, res) => {
            let pol = req.body.pol;
            let disciplina = req.body.disciplina;
            sportista_1.default.find({ 'pol': pol, 'discipline': disciplina }, (err, sportiste) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportiste);
            });
        };
        this.dodaj_disciplinu = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let disciplina = req.body.disciplina;
            sportista_1.default.update({ 'ime': ime, 'prezime': prezime }, { $addToSet: { 'discipline': disciplina } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.proveri_drugi_sport = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let sport = req.body.sport;
            sportista_1.default.find({ 'ime': ime, 'prezime': prezime, 'sport': { $ne: sport } }, (err, sportista) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportista);
            });
        };
        this.dodaj_sportistu = (req, res) => {
            let sportista = new sportista_1.default(req.body);
            // console.log(" consossssssssssle.log(req.body);"); 
            //console.log(req.body);
            sportista.save().then((sportista) => {
                res.status(200).json({ 'message': 'sportista dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.dohvati_drzave_ucesnice = (req, res) => {
            sportista_1.default.distinct("nacionalnost", {}, (err, drzave) => {
                if (err)
                    console.log(err);
                else
                    res.json(drzave);
            });
        };
        this.dohvati_br_sportista_drzave = (req, res) => {
            let drzava = req.body.drzava;
            sportista_1.default.count({ 'nacionalnost': drzava }, (err, broj) => {
                if (err)
                    console.log(err);
                else
                    res.json(broj);
            });
        };
        this.pretraga_sportista = (req, res) => {
            // console.log(req.body);
            var query = {};
            for (var key in req.body) {
                if (req.body[key] != '')
                    query[key] = req.body[key];
            }
            //query = req.body;
            //console.log(query);
            sportista_1.default.find(query, (err, sportisti) => {
                if (err)
                    console.log(err);
                else {
                    res.json(sportisti);
                }
            });
        };
    }
}
exports.SportistaController = SportistaController;
//# sourceMappingURL=sportista.controller.js.map