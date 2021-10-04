"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.dohvati_sve_korisnike = (req, res) => {
            korisnik_1.default.find({}, (err, resp) => {
                res.json(resp);
            });
        };
        this.dohvati_neodobrene = (req, res) => {
            korisnik_1.default.find({ 'odobren': 0 }, (err, neodobreni) => {
                if (err)
                    console.log(err);
                else
                    res.json(neodobreni);
            });
        };
        this.obrisi_korisnika = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            korisnik_1.default.remove({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (status) => {
                res.json(status);
            });
        };
        this.odobri_korisnika = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOneAndUpdate({ 'korisnicko': korisnicko, 'lozinka': lozinka }, { $set: { 'odobren': 1 } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.uvecaj_broj_takmicenja = (req, res) => {
            var ObjectId = require('mongodb').ObjectId;
            korisnik_1.default.updateOne({ _id: ObjectId(req.body.id) }, { $inc: { 'brtak': 1 } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.uvecaj_brtak = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            korisnik_1.default.updateOne({ 'ime': ime, 'prezime': prezime }, { $inc: { 'brtak': 1 } }, (err, response) => {
                if (err)
                    console.log(err);
                else
                    res.json(response);
            });
        };
        this.dohvati_delegate = (req, res) => {
            korisnik_1.default.find({ 'tip': 'delegat', 'brtak': { $lte: 3 }, 'odobren': 1 }, (err, delegati) => {
                if (err)
                    console.log(err);
                else
                    res.json(delegati);
            });
        };
        this.prijava = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (err, korisnik) => {
                console.log();
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.proveri_vodju = (req, res) => {
            let drzava = req.body.nacionalnost;
            korisnik_1.default.findOne({ 'nacionalnost': drzava, 'tip': "vodja delegacije" }, (err, korisnik) => {
                if (korisnik)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.proveri_korisnicko = (req, res) => {
            let korisnicko = req.body.korisnicko;
            //console.log(korisnicko);
            korisnik_1.default.findOne({ 'korisnicko': korisnicko }, (err, korisnik) => {
                if (korisnik)
                    res.json({ 'message': 'Vec postoji' });
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.registracija = (req, res) => {
            let korisnik = new korisnik_1.default(req.body);
            // console.log(" consossssssssssle.log(req.body);"); 
            //console.log(req.body);
            korisnik.save().then((korisnik) => {
                res.status(200).json({ 'message': 'korisnik dodat' });
            }).catch((err) => {
                res.status(400).json({ 'message': 'doslo do greske' });
            });
        };
        this.promena_lozinke = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            let nova_lozinka = req.body.nova_lozinka;
            korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }).update({ "lozinka": nova_lozinka }, (err, kor) => {
                if (err)
                    console.log(err);
                else
                    res.status(200).json({ 'message': 'uspeh' });
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map