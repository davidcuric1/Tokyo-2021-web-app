
import Medalja from '../models/medalja';
import express from 'express';

export class MedaljaController{

    uvecaj_zlata = (req : express.Request, res : express.Response)=>{
        let drzava = req.body.drzava;

        Medalja.updateOne({'drzava':drzava},{$inc:{'zlata':1,'ukupno':1},$setOnInsert:{'srebra':0,'bronze':0}},{upsert:true},(err,resp)=>{
            res.json(resp);
        })
    }
    uvecaj_srebra = (req : express.Request, res : express.Response)=>{
        let drzava = req.body.drzava;

        Medalja.updateOne({'drzava':drzava},{$inc:{'srebra':1,'ukupno':1},$setOnInsert:{'zlata':0,'bronze':0}},{upsert:true},(err,resp)=>{
            res.json(resp);
        })
    }
    uvecaj_bronze = (req : express.Request, res : express.Response)=>{
        let drzava = req.body.drzava;

        Medalja.updateOne({'drzava':drzava},{$inc:{'bronze':1,'ukupno':1},$setOnInsert:{'srebra':0,'zlata':0}},{upsert:true},(err,resp)=>{
            res.json(resp);
        })
    }

    dohvati_sve_sortirano = async (req : express.Request, res : express.Response)=>{

    const results = await Medalja.find({}).sort({'ukupno':-1,'zlata':-1,'srebra':-1,'bronze':-1});
     // console.log(results);
     res.json(results);
    }
}