"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportController = void 0;
const sport_1 = __importDefault(require("../models/sport"));
class SportController {
    constructor() {
        this.dohvati_sve_sportove = (req, res) => {
            sport_1.default.find({}, (err, sportovi) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportovi);
            });
        };
        this.dohvati_sport_po_nazivu = (req, res) => {
            let naziv = req.body.sport;
            sport_1.default.findOne({ 'naziv': naziv }, (err, sport) => {
                if (err)
                    console.log(err);
                else
                    res.json(sport);
            });
        };
    }
}
exports.SportController = SportController;
//# sourceMappingURL=sport.controller.js.map