import express from 'express';
import Sport from '../models/sport';

export class SportController{
    dohvati_sve_sportove = (req : express.Request, res : express.Response)=>{

        Sport.find({},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvati_sport_po_nazivu = (req : express.Request, res : express.Response)=>{
        let naziv = req.body.sport;

        Sport.findOne({'naziv':naziv},(err,sport)=>{
            if(err)console.log(err);
            else res.json(sport);
        })
    }
}