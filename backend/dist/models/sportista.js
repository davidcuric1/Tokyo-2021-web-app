"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Sportista = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    pol: {
        type: String
    },
    sport: {
        type: String
    },
    discipline: {
        type: Array
    },
    nacionalnost: {
        type: String
    },
    osvojio_medalju: {
        type: Number
    },
    nosilac: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Sportista', Sportista, 'Sportisti');
//# sourceMappingURL=sportista.js.map