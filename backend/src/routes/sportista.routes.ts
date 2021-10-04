import express from 'express';
import { SportistaController } from '../controllers/sportista.controller';


const sportistaRouter=express.Router();

sportistaRouter.route('/dohvati_po_id').post(
    (req,res)=> new SportistaController().dohvati_po_id(req,res)

    
)

sportistaRouter.route('/dodeli_medalju').post(
    (req,res)=> new SportistaController().dodeli_medalju(req,res)

    
)

sportistaRouter.route('/dohvati_potencijalne_ucesnike').post(
    (req,res)=> new SportistaController().dohvati_potencijalne_ucesnike(req,res)

    
)


sportistaRouter.route('/dodaj_disciplinu').post(
    (req,res)=> new SportistaController().dodaj_disciplinu(req,res)

    
)

sportistaRouter.route('/proveri_drugi_sport').post(
    (req,res)=> new SportistaController().proveri_drugi_sport(req,res)

    
)

sportistaRouter.route('/dohvati_drzave_ucesnice').get(
    (req,res)=> new SportistaController().dohvati_drzave_ucesnice(req,res)

    
)

sportistaRouter.route('/dohvati_br_sportista_drzave').post(
    (req,res)=> new SportistaController().dohvati_br_sportista_drzave(req,res)

    
)
sportistaRouter.route('/pretraga_sportista').post(
    (req,res)=> new SportistaController().pretraga_sportista(req,res)

    
)
sportistaRouter.route('/dodaj_sportistu').post(
    (req,res)=> new SportistaController().dodaj_sportistu(req,res)

    
)


export default sportistaRouter;