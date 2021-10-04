
import express from 'express';
import MecTurnira from '../models/mecturnira';

export class MecTurniraController{

    unesi_rezultat = (req:express.Request, res:express.Response) =>{
        let igrac1=req.body.igrac1;
        let igrac2=req.body.igrac2;
        let rezultat = req.body.rezultat;

        MecTurnira.updateOne({'igrac1':igrac1,'igrac2':igrac2},{$set:{'rezultat':rezultat}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    dohvati_meceve_sa_terminom = (req:express.Request, res:express.Response) =>{
        let disciplina = req.body.disciplina;
        let runda = req.body.runda;
        let id_delegata = req.body.id_delegata;
        let pol=req.body.pol;

        MecTurnira.find({'disciplina':disciplina,'runda':runda,'id_delegata':id_delegata,'datpocetka':{$ne:null},'rezultat':null,'pol':pol},(err,mecevi)=>{
            if(err)console.log(err);
            else res.json(mecevi);
        })
    }

    provera_datum_vreme_lokacija = (req:express.Request, res:express.Response) =>{
        let datpocetka = req.body.datpocetka;
        let lokacija = req.body.lokacija;
        let vreme = req.body.vreme;

        MecTurnira.findOne({'datpocetka':datpocetka,'vreme':vreme,'lokacija':lokacija},(err,data)=>{
            if(data)res.json({'message':'postoji'});
            else res.json({'message':'ok'});
        })
    }    

    unos_datum_vreme_lokacija = (req:express.Request, res:express.Response) =>{
        let igrac1=req.body.igrac1;
        let igrac2=req.body.igrac2;
        let datpocetka = req.body.datpocetka;
        let lokacija = req.body.lokacija;
        let vreme = req.body.vreme;

        MecTurnira.updateOne({'igrac1':igrac1,'igrac2':igrac2},{$set:{'datpocetka':datpocetka,'lokacija':lokacija,'vreme':vreme}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    dohvati_meceve = (req:express.Request, res:express.Response)=>{
        let disciplina = req.body.disciplina;
        let runda = req.body.runda;
        let id_delegata = req.body.id_delegata;
        let pol=req.body.pol;

        MecTurnira.find({'disciplina':disciplina,'runda':runda,'id_delegata':id_delegata,'datpocetka':null,'pol':pol},(err,mecevi)=>{
            if(err)console.log(err);
            else res.json(mecevi);
        })
    }
    
    dodaj_mec = (req:express.Request, res:express.Response)=>{
        let mec = new MecTurnira(req.body);
       // console.log(" consossssssssssle.log(req.body);"); 
        console.log(req.body);
        
        mec.save().then((mec)=>{
            res.status(200).json({'message' : 'mec dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }
}