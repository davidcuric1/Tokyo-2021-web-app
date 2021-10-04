"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Sport = new Schema({
    naziv: {
        type: String
    },
    discipline: {
        type: Array
    },
    vrsta: {
        type: Array
    },
    min: {
        type: Array
    },
    max: {
        type: Array
    },
    tip_takmicenja: String,
    tip_rezultata: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Sportovi', Sport, 'Sportovi');
//# sourceMappingURL=sport.js.map