import express from 'express';
import { MedaljaController } from '../controllers/medalja.controller';

const medaljaRouter = express.Router();

medaljaRouter.route('/uvecaj_zlata').post(
    (req,res)=> new MedaljaController().uvecaj_zlata(req,res)

    
)
medaljaRouter.route('/uvecaj_srebra').post(
    (req,res)=> new MedaljaController().uvecaj_srebra(req,res)

    
)
medaljaRouter.route('/uvecaj_bronze').post(
    (req,res)=> new MedaljaController().uvecaj_bronze(req,res)

    
)

medaljaRouter.route('/dohvati_sve_sortirano').get(
    (req,res)=> new MedaljaController().dohvati_sve_sortirano(req,res)

    
)
export default medaljaRouter;