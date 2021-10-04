import express from 'express';
import { LokacijaController } from '../controllers/lokacija.controller';


const lokacijaRouter=express.Router();


lokacijaRouter.route('/dohvati_sve').get(
    (req,res)=> new LokacijaController().dohvati_sve(req,res)

    
)

export default lokacijaRouter;