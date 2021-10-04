import express from 'express';
import Sportista from '../models/sportista';

export class SportistaController{

    dohvati_po_id = (req : express.Request, res : express.Response) =>{
        let id = req.body.id;

        Sportista.findOne({'_id':id},(err,resp)=>{
            if(err)console.log(err);
            else res.json(resp);
        })
    }

    dodeli_medalju = (req : express.Request, res : express.Response) =>{
        let id = req.body.id;
        console.log(id)
        Sportista.update({'_id':id},{$set:{'osvojio_medalju':1}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        });

    }

    dohvati_potencijalne_ucesnike = (req : express.Request, res : express.Response) =>{
        let pol = req.body.pol;
        let disciplina = req.body.disciplina;

        Sportista.find({'pol':pol,'discipline':disciplina},(err,sportiste)=>{
            if(err)console.log(err);
            else res.json(sportiste);
        })
    }

    dodaj_disciplinu = (req : express.Request, res : express.Response) =>{
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let disciplina = req.body.disciplina;
        
        Sportista.update({'ime':ime,'prezime':prezime},{$addToSet:{'discipline':disciplina}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        });
    }

    proveri_drugi_sport = (req : express.Request, res : express.Response) =>{
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let sport = req.body.sport;

        Sportista.find({'ime':ime,'prezime':prezime,'sport':{$ne:sport}},(err,sportista)=>{
            if(err)console.log(err);
            else res.json(sportista);
        })
    }

    dodaj_sportistu = (req : express.Request, res : express.Response) =>{
        let sportista = new Sportista(req.body);
       // console.log(" consossssssssssle.log(req.body);"); 
        //console.log(req.body);
        
        sportista.save().then((sportista)=>{
            res.status(200).json({'message' : 'sportista dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }

    dohvati_drzave_ucesnice = (req : express.Request, res : express.Response)=>{

        Sportista.distinct("nacionalnost",{},(err,drzave)=>{
            if(err)console.log(err);
            else res.json(drzave);
        })
    }
    dohvati_br_sportista_drzave = (req : express.Request, res : express.Response) =>{
        let drzava = req.body.drzava;

        Sportista.count({'nacionalnost':drzava},(err,broj)=>{
            if(err)console.log(err);
            else res.json(broj);
        })
    }
    pretraga_sportista = (req : express.Request, res : express.Response)=>{
       // console.log(req.body);
        var query:any = {};
       for(var key in req.body){
           if(req.body[key]!='')
                query[key] = req.body[key];
        }
        //query = req.body;
        //console.log(query);
        Sportista.find(query,(err,sportisti)=>{
            if(err)console.log(err);
            else { res.json(sportisti);}
        })
    }
}