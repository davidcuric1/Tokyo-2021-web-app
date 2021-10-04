"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LokacijaController = void 0;
const lokacija_1 = __importDefault(require("../models/lokacija"));
class LokacijaController {
    constructor() {
        this.dohvati_sve = (req, res) => {
            lokacija_1.default.find({}, (err, lokacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(lokacije);
            });
        };
    }
}
exports.LokacijaController = LokacijaController;
//# sourceMappingURL=lokacija.controller.js.map