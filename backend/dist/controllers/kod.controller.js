"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KodController = void 0;
const kod_1 = __importDefault(require("../models/kod"));
class KodController {
    constructor() {
        this.dohvati_kod_drzave = (req, res) => {
            let drzava = req.body.drzava;
            kod_1.default.findOne({ 'ime': drzava }, (err, kod) => {
                if (err)
                    console.log(err);
                else
                    res.json(kod);
            });
        };
        this.dohvati_sve_drzave = (req, res) => {
            kod_1.default.find({}, (err, drzave) => {
                if (err)
                    console.log(err);
                else
                    res.json(drzave);
            });
        };
    }
}
exports.KodController = KodController;
//# sourceMappingURL=kod.controller.js.map