"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportDisciplinaController = void 0;
const format_1 = __importDefault(require("../models/format"));
const sportdisciplina_1 = __importDefault(require("../models/sportdisciplina"));
class SportDisciplinaController {
    constructor() {
        this.dohvati_tip_rezultata_discipline = (req, res) => {
            let disciplina = req.body.disciplina;
            format_1.default.findOne({ 'disciplina': disciplina }, (err, format) => {
                if (err)
                    console.log(err);
                else
                    res.json(format);
            });
        };
        this.dohvati_po_imenu = (req, res) => {
            let sport = req.body.sport;
            sportdisciplina_1.default.find({ 'tip': 'ind', 'sport': sport }, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvati_individualne = (req, res) => {
            sportdisciplina_1.default.distinct('sport', { 'tip': 'ind' }, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dodaj = (req, res) => {
            let zaDodavanje = new sportdisciplina_1.default(req.body);
            // console.log(" consossssssssssle.log(req.body);"); 
            //console.log(req.body);
            zaDodavanje.save().then((data) => {
                res.status(200).json({ 'message': 'disciplina dodata' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.proveri_disciplinu = (req, res) => {
            let disciplina = req.body.disciplina;
            //console.log(korisnicko);
            sportdisciplina_1.default.findOne({ 'disciplina': disciplina }, (err, data) => {
                if (data)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.proveri_sport = (req, res) => {
            let sport = req.body.sport;
            //console.log(korisnicko);
            sportdisciplina_1.default.findOne({ 'sport': sport }, (err, data) => {
                if (data)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
    }
}
exports.SportDisciplinaController = SportDisciplinaController;
//# sourceMappingURL=sportdisciplina.controller.js.map