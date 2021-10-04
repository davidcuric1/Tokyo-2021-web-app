"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kod_controller_1 = require("../controllers/kod.controller");
const kodRouter = express_1.default.Router();
kodRouter.route('/dohvati_kod_drzave').post((req, res) => new kod_controller_1.KodController().dohvati_kod_drzave(req, res));
kodRouter.route('/dohvati_sve_drzave').get((req, res) => new kod_controller_1.KodController().dohvati_sve_drzave(req, res));
exports.default = kodRouter;
//# sourceMappingURL=kod.routes.js.map