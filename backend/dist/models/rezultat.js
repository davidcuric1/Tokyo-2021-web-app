"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Rezultat = new Schema({
    id_sportiste: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
        type: String
    },
    runda: {
        type: Number
    },
    rez: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Rezultat', Rezultat, 'Rezultat');
//# sourceMappingURL=rezultat.js.map