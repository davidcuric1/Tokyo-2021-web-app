"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Format = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    format_rezultata: {
        type: String
    },
    opsezi: {
        type: Array
    },
    dozvoljeni_rezultati: {
        type: Array
    },
    broj_serija: {
        type: Number
    },
    broj_takmicara: {
        type: Array
    },
    tip_rezultata: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Format', Format, 'Formati');
//# sourceMappingURL=format.js.map