"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Takmicenje = new Schema({
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
        type: String
    },
    datpocetka: {
        type: String
    },
    datkraja: {
        type: String
    },
    lokacija: {
        type: String
    },
    vreme: {
        type: String
    },
    brucesnika: {
        type: Number
    },
    ucesnici: {
        type: Array
    },
    delegat: {
        type: String
    },
    id_delegata: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Takmicenja', Takmicenje, 'Takmicenja');
//# sourceMappingURL=takmicenje.js.map