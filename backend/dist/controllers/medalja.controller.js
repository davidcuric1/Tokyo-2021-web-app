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
exports.MedaljaController = void 0;
const medalja_1 = __importDefault(require("../models/medalja"));
class MedaljaController {
    constructor() {
        this.uvecaj_zlata = (req, res) => {
            let drzava = req.body.drzava;
            medalja_1.default.updateOne({ 'drzava': drzava }, { $inc: { 'zlata': 1, 'ukupno': 1 }, $setOnInsert: { 'srebra': 0, 'bronze': 0 } }, { upsert: true }, (err, resp) => {
                res.json(resp);
            });
        };
        this.uvecaj_srebra = (req, res) => {
            let drzava = req.body.drzava;
            medalja_1.default.updateOne({ 'drzava': drzava }, { $inc: { 'srebra': 1, 'ukupno': 1 }, $setOnInsert: { 'zlata': 0, 'bronze': 0 } }, { upsert: true }, (err, resp) => {
                res.json(resp);
            });
        };
        this.uvecaj_bronze = (req, res) => {
            let drzava = req.body.drzava;
            medalja_1.default.updateOne({ 'drzava': drzava }, { $inc: { 'bronze': 1, 'ukupno': 1 }, $setOnInsert: { 'srebra': 0, 'zlata': 0 } }, { upsert: true }, (err, resp) => {
                res.json(resp);
            });
        };
        this.dohvati_sve_sortirano = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const results = yield medalja_1.default.find({}).sort({ 'ukupno': -1, 'zlata': -1, 'srebra': -1, 'bronze': -1 });
            // console.log(results);
            res.json(results);
        });
    }
}
exports.MedaljaController = MedaljaController;
//# sourceMappingURL=medalja.controller.js.map