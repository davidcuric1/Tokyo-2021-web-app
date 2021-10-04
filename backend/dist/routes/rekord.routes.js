"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rekord_controller_1 = require("../controllers/rekord.controller");
const rekordRouter = express_1.default.Router();
rekordRouter.route('/dohvati_sve_rekorde').get((req, res) => new rekord_controller_1.RekordController().dohvati_sve_rekorde(req, res));
rekordRouter.route('/dohvati_rekord').post((req, res) => new rekord_controller_1.RekordController().dohvati_rekord(req, res));
rekordRouter.route('/apdejtuj_rekord').post((req, res) => new rekord_controller_1.RekordController().apdejtuj_rekord(req, res));
exports.default = rekordRouter;
//# sourceMappingURL=rekord.routes.js.map