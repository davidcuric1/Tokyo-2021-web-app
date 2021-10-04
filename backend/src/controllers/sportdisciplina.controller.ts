//import { SportDisciplina } from './../../../frontend/app/src/app/model/sportdisciplina';
import express from 'express';
import format from '../models/format';
import SportDisciplina from '../models/sportdisciplina';

export class SportDisciplinaController{

    dohvati_tip_rezultata_discipline = (req:express.Request, res:express.Response) =>{
        let disciplina=req.body.disciplina;

        format.findOne({'disciplina':disciplina},(err,format)=>{
            if(err)console.log(err);
            else res.json(format);
        })
    }

    dohvati_po_imenu= (req:express.Request, res:express.Response) =>{
        let sport=req.body.sport;

        SportDisciplina.find({'tip':'ind','sport':sport},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dohvati_individualne = (req:express.Request, res:express.Response) =>{
        SportDisciplina.distinct('sport',{'tip':'ind'},(err,sportovi)=>{
            if(err)console.log(err);
            else res.json(sportovi);
        })
    }

    dodaj = (req:express.Request, res:express.Response)=>{
        let zaDodavanje = new SportDisciplina(req.body);
       // console.log(" consossssssssssle.log(req.body);"); 
        //console.log(req.body);
        
        zaDodavanje.save().then((data)=>{
            res.status(200).json({'message' : 'disciplina dodata'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }

    proveri_disciplinu = (req:express.Request, res:express.Response) =>{
        let disciplina=req.body.disciplina;


        //console.log(korisnicko);

        SportDisciplina.findOne({'disciplina':disciplina},(err,data)=>{
            if(data)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }
    
    proveri_sport = (req:express.Request, res:express.Response) =>{
        let sport=req.body.sport;


        //console.log(korisnicko);

        SportDisciplina.findOne({'sport':sport},(err,data)=>{
            if(data)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }
}