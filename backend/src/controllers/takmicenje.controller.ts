
import express from 'express';
import rezultat from '../models/rezultat';
import Format from '../models/format';

import Runda from '../models/runda';
import Takmicenje from '../models/takmicenje';
import FormatTurnira from '../models/formatTurnira'



export class TakmicenjeController{

    dohvati_zbir_rezultata = (req:express.Request, res:express.Response)=>{
       
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;
        
        rezultat.aggregate([
            {$match:{disciplina:disciplina,pol:pol}},
            {$group:{_id:"$id_sportiste",ukupno:{$sum:"$rez"}}}
        ],(err:any,resp:any)=>{
            if(err)console.log(err);
            else res.json(resp);
        })
    }

    dohvati_najbolji_rezultat_sportiste = async (req:express.Request, res:express.Response)=>{
        let id = req.body.id_sportiste;
        let disciplina = req.body.disciplina;

        const results = await rezultat.find({'disciplina':disciplina,'id_sportiste':id}).sort({'rez':-1}).limit(1);
        // console.log(results);
        res.json(results);

    }

    dohvati_finalne_rezultate = async (req:express.Request, res:express.Response)=>{
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        const results = await rezultat.find({'disciplina':disciplina,'pol':pol}).sort({'rez':-1});
        // console.log(results);
        res.json(results);
    }

    unos_datkraja = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;
        let datkraja = req.body.datkraja;
        

        Takmicenje.updateOne({'disciplina':disciplina,'pol':pol},{$set:{'datkraja':datkraja}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    unos_rezultata = (req:express.Request, res:express.Response) =>{
        let rez = new rezultat(req.body);

        rez.save().then((rez)=>{
            res.status(200).json({'message' : 'rezultat dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })

    }

    doh_rez = (req:express.Request, res:express.Response) =>{
        rezultat.find({},(err,rez)=>{
            if(err)console.log(err);
            else res.json(rez);
        })
    }

    dohvati_format_turnira = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;

        FormatTurnira.findOne({'disciplina':disciplina},(err,format)=>{
            if(err)console.log(err);
            else res.json(format);
        })
    }

  

    dohvati_format_takmicenja = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;

        Format.findOne({'disciplina':disciplina},(err,format)=>{
            if(err)console.log(err);
            else res.json(format);
        })
    }

    dohvati_takmicenja_za_unos_rezultata = (req:express.Request, res:express.Response) =>{
        let id = req.body.id;

        Takmicenje.find({'id_delegata':id,'datkraja':null,'datpocetka':{$ne:null}},(err,takmicenja)=>{
            if(err)console.log(err);
            else res.json(takmicenja);
        })
    }

    uvecaj_rundu = (req:express.Request, res:express.Response) =>{
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        console.log(disciplina);

        Runda.updateOne({'disciplina':disciplina,'pol':pol},{$inc:{'trenutnaRunda':1}},resp=>{
            res.json(resp);
        })
    }

    dohvati_rundu = (req:express.Request, res:express.Response) =>{
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Runda.findOne({'disciplina':disciplina,'pol':pol},(err,runda)=>{
            if(err)console.log(err);
            else res.json(runda);
        })
    }

    unesi_rundu  = (req:express.Request, res:express.Response) =>{
        let runda = new Runda(req.body);

        runda.save().then((runda)=>{
            res.status(200).json({'message' : 'korisnik dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })

        
    }

    provera_datum_vreme_lokacija = (req:express.Request, res:express.Response) =>{
        let datpocetka = req.body.datpocetka;
        let lokacija = req.body.lokacija;
        let vreme = req.body.vreme;

        Takmicenje.findOne({'datpocetka':datpocetka,'vreme':vreme,'lokacija':lokacija},(err,data)=>{
            if(data)res.json({'message':'postoji'});
            else res.json({'message':'ok'});
        })
    }

    unos_datum_vreme_lokacija = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;
        let datpocetka = req.body.datpocetka;
        let lokacija = req.body.lokacija;
        let vreme = req.body.vreme;

        Takmicenje.updateOne({'disciplina':disciplina,'pol':pol},{$set:{'datpocetka':datpocetka,'lokacija':lokacija,'vreme':vreme}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    dohvati_takmicenja_delegata = (req:express.Request, res:express.Response) =>{
        let id = req.body.id;

        Takmicenje.find({'id_delegata':id,/*'datpocetka':null,*/'datkraja':null,'lokacija':null,'vreme':null},(err,takmicenja)=>{
            if(err)console.log(err);
            else res.json(takmicenja);
        })
    }

    proveri_disciplinu = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;

        Takmicenje.findOne({'disciplina':disciplina,'pol':pol},(err,data)=>{
            if(data)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }
    

    dodaj_takmicenje = (req:express.Request, res:express.Response)=>{
        console.log(req.body);
        let takmicenje = new Takmicenje(req.body);
       // console.log(" consossssssssssle.log(req.body);"); 
        //console.log(req.body);
        
        takmicenje.save().then((takmicenje)=>{
            res.status(200).json({'message' : 'korisnik dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }
}