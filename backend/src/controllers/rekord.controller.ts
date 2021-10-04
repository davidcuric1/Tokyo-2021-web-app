import express from 'express';

import Rekord from '../models/rekord';

export class RekordController{
    apdejtuj_rekord = (req : express.Request, res : express.Response)=>{
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let nacionalnost = req.body.nacionalnost;
        let rezultat = req.body.rezultat;
        let igre = "2020 Tokyo";
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Rekord.findOneAndUpdate({'disciplina':disciplina,'pol':pol},{$set:{'ime':ime,'prezime':prezime,'nacionalnost':nacionalnost,'rezultat':rezultat,'igre':igre}},(err,resp)=>{
            if(err)console.log(err);
            res.json(resp);
        })

        
    }

    dohvati_rekord = (req : express.Request, res : express.Response)=>{
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        Rekord.find({'disciplina':disciplina,'pol':pol},(err,rekordi)=>{
            if(err)console.log(err);
            else res.json(rekordi);
        })
    }

    dohvati_sve_rekorde = (req : express.Request, res : express.Response)=>{

        Rekord.find({},(err,rekordi)=>{
            if(err)console.log(err);
            else res.json(rekordi);
        })
    }
    
}