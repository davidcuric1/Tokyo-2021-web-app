import express from 'express';
import { SportController } from '../controllers/sport.controller';

const sportRouter=express.Router();

sportRouter.route('/dohvati_sve_sportove').get(
    (req,res)=> new SportController().dohvati_sve_sportove(req,res)

    
)
sportRouter.route('/dohvati_sport_po_nazivu').post(
    (req,res)=> new SportController().dohvati_sport_po_nazivu(req,res)

    
)

export default sportRouter;