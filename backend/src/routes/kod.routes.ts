import express from 'express';
import { KodController } from '../controllers/kod.controller';

const kodRouter=express.Router();


kodRouter.route('/dohvati_kod_drzave').post(
    (req,res)=> new KodController().dohvati_kod_drzave(req,res)

    
)
kodRouter.route('/dohvati_sve_drzave').get(
    (req,res)=> new KodController().dohvati_sve_drzave(req,res)

    
)


export default kodRouter;