import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter=express.Router();

korisnikRouter.route('/uvecaj_broj_takmicenja').post(
    (req,res)=> new KorisnikController().uvecaj_broj_takmicenja(req,res)

    
)
korisnikRouter.route('/dohvati_sve_korisnike').get(
    (req,res)=> new KorisnikController().dohvati_sve_korisnike(req,res)

    
)


korisnikRouter.route('/dohvati_neodobrene').get(
    (req,res)=> new KorisnikController().dohvati_neodobrene(req,res)

    
)

korisnikRouter.route('/obrisi_korisnika').post(
    (req,res)=> new KorisnikController().obrisi_korisnika(req,res)

    
)

korisnikRouter.route('/odobri_korisnika').post(
    (req,res)=> new KorisnikController().odobri_korisnika(req,res)

    
)

korisnikRouter.route('/uvecaj_brtak').post(
    (req,res)=> new KorisnikController().uvecaj_brtak(req,res)

    
)

korisnikRouter.route('/dohvati_delegate').get(
    (req,res)=> new KorisnikController().dohvati_delegate(req,res)

    
)

korisnikRouter.route('/prijava').post(
    (req,res)=> new KorisnikController().prijava(req,res)

    
)
korisnikRouter.route('/promena_lozinke').post(
    (req,res)=> new KorisnikController().promena_lozinke(req,res)
)

korisnikRouter.route('/registracija').post(
    (req,res)=> new KorisnikController().registracija(req,res)
)

korisnikRouter.route('/proveri_korisnicko').post(
    (req,res) => new KorisnikController().proveri_korisnicko(req,res)
)

korisnikRouter.route('/proveri_vodju').post(
    (req,res) => new KorisnikController().proveri_vodju(req,res)
)


export default korisnikRouter;