"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sport_controller_1 = require("../controllers/sport.controller");
const sportRouter = express_1.default.Router();
sportRouter.route('/dohvati_sve_sportove').get((req, res) => new sport_controller_1.SportController().dohvati_sve_sportove(req, res));
sportRouter.route('/dohvati_sport_po_nazivu').post((req, res) => new sport_controller_1.SportController().dohvati_sport_po_nazivu(req, res));
exports.default = sportRouter;
//# sourceMappingURL=sport.routes.js.map