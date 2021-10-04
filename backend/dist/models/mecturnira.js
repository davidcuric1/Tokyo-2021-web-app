"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let MecTurnira = new Schema({
    igrac1: {
        type: Array
    },
    igrac2: {
        type: Array
    },
    sport: {
        type: String
    },
    rezultat: {
        type: String
    },
    datpocetka: {
        type: Date
    },
    vreme: {
        type: String
    },
    lokacija: {
        type: String
    },
    runda: {
        type: Number
    },
    disciplina: {
        type: String
    },
    id_delegata: {
        type: String
    },
    pol: {
        type: String
    }
});
exports.default = mongoose_1.default.model('MecTurnira', MecTurnira, 'MeceviTurnira');
//# sourceMappingURL=mecturnira.js.map