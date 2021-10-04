import express from 'express';

import Kod from '../models/kod';

export class KodController{
    dohvati_kod_drzave = (req : express.Request, res : express.Response)=>{
        let drzava = req.body.drzava;

        Kod.findOne({'ime':drzava},(err,kod)=>{
            if(err)console.log(err);
            else res.json(kod);
        })
    }
    dohvati_sve_drzave = (req : express.Request, res : express.Response)=>{
        Kod.find({},(err,drzave)=>{
            if(err)console.log(err);
            else res.json(drzave);
        })
    }
    
}