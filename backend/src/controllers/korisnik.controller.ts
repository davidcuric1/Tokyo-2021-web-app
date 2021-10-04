import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController{

    dohvati_sve_korisnike = (req : express.Request, res : express.Response)=>{
        Korisnik.find({},(err,resp)=>{
            res.json(resp);
        })
    }

    dohvati_neodobrene = (req : express.Request, res : express.Response)=>{
        Korisnik.find({'odobren':0},(err,neodobreni)=>{
            if(err)console.log(err);
            else res.json(neodobreni);
        })
    }
    obrisi_korisnika = (req : express.Request, res : express.Response) =>{
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        Korisnik.remove({'korisnicko':korisnicko,'lozinka':lozinka},(status)=>{
            res.json(status);
        })
    }

    odobri_korisnika = (req : express.Request, res : express.Response)=>{
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        Korisnik.findOneAndUpdate({'korisnicko':korisnicko,'lozinka':lozinka},{$set:{'odobren':1}},(err,resp)=>{
            if(err)console.log(err);
            else res.json({'message':'ok'});
        })
    }

    uvecaj_broj_takmicenja = (req : express.Request, res : express.Response)=>{
        var ObjectId = require('mongodb').ObjectId;

        Korisnik.updateOne({_id:ObjectId(req.body.id)},{$inc:{'brtak':1}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    uvecaj_brtak = (req : express.Request, res : express.Response)=>{
        let ime=req.body.ime;
        let prezime = req.body.prezime;



        Korisnik.updateOne({'ime':ime,'prezime':prezime},{$inc:{'brtak':1}},(err,response)=>{
            if(err)console.log(err);
            else res.json(response);
        })
    }

    dohvati_delegate=(req : express.Request, res : express.Response)=>{

        Korisnik.find({'tip':'delegat','brtak':{$lt:3},'odobren':1},(err,delegati)=>{
            if(err)console.log(err);
            else res.json(delegati);
        })
    }

    prijava = (req : express.Request, res : express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        

        Korisnik.findOne({'korisnicko':korisnicko,'lozinka':lozinka},(err,korisnik)=>{
            console.log();
            if(err)console.log(err);
            else res.json(korisnik);
        })
    }

    proveri_vodju = (req:express.Request, res:express.Response)=>{
        let drzava = req.body.nacionalnost;

        Korisnik.findOne({'nacionalnost':drzava,'tip':"vodja delegacije"},(err,korisnik)=>{
            if(korisnik)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }

    proveri_korisnicko = (req : express.Request, res : express.Response)=>{
        let korisnicko=req.body.korisnicko;


        //console.log(korisnicko);

        Korisnik.findOne({'korisnicko':korisnicko},(err,korisnik)=>{
            if(korisnik)res.json({'message':'Vec postoji'});
            else res.json({'message':'ok'});
        })
    }
    registracija = (req : express.Request, res : express.Response) => {
        let korisnik = new Korisnik(req.body);
       // console.log(" consossssssssssle.log(req.body);"); 
        //console.log(req.body);
        
        korisnik.save().then((korisnik)=>{
            res.status(200).json({'message' : 'korisnik dodat'});

        }).catch((err)=>{

            res.status(400).json({'message' : 'doslo do greske'});
        })
    }

    promena_lozinke= (req: express.Request, res:express.Response) => {
        let korisnicko=req.body.korisnicko;
        let lozinka=req.body.lozinka;
        let nova_lozinka=req.body.nova_lozinka;

        Korisnik.findOne({'korisnicko':korisnicko,'lozinka':lozinka}).update({"lozinka": nova_lozinka},(err,kor)=>{
            if(err)console.log(err);
            else res.status(200).json({'message':'uspeh'});
        });
        
    }
    
}