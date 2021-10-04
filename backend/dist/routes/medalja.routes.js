"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medalja_controller_1 = require("../controllers/medalja.controller");
const medaljaRouter = express_1.default.Router();
medaljaRouter.route('/uvecaj_zlata').post((req, res) => new medalja_controller_1.MedaljaController().uvecaj_zlata(req, res));
medaljaRouter.route('/uvecaj_srebra').post((req, res) => new medalja_controller_1.MedaljaController().uvecaj_srebra(req, res));
medaljaRouter.route('/uvecaj_bronze').post((req, res) => new medalja_controller_1.MedaljaController().uvecaj_bronze(req, res));
medaljaRouter.route('/dohvati_sve_sortirano').get((req, res) => new medalja_controller_1.MedaljaController().dohvati_sve_sortirano(req, res));
exports.default = medaljaRouter;
//# sourceMappingURL=medalja.routes.js.map