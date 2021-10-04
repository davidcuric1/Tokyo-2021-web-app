import express from 'express';
import { RekordController } from '../controllers/rekord.controller';

const rekordRouter=express.Router();


rekordRouter.route('/dohvati_sve_rekorde').get(
    (req,res)=> new RekordController().dohvati_sve_rekorde(req,res)

    
)
rekordRouter.route('/dohvati_rekord').post(
    (req,res)=> new RekordController().dohvati_rekord(req,res)

    
)
rekordRouter.route('/apdejtuj_rekord').post(
    (req,res)=> new RekordController().apdejtuj_rekord(req,res)

    
)


export default rekordRouter;