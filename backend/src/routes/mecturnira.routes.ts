import express from 'express';
import { MecTurniraController } from '../controllers/mecturnira.controller';

const mecTurniraRouter=express.Router();

mecTurniraRouter.route('/unesi_rezultat').post(
    (req,res)=> new MecTurniraController().unesi_rezultat(req,res)

    
)

mecTurniraRouter.route('/dohvati_meceve_sa_terminom').post(
    (req,res)=> new MecTurniraController().dohvati_meceve_sa_terminom(req,res)

    
)

mecTurniraRouter.route('/dodaj_mec').post(
    (req,res)=> new MecTurniraController().dodaj_mec(req,res)

    
)

mecTurniraRouter.route('/dohvati_meceve').post(
    (req,res)=> new MecTurniraController().dohvati_meceve(req,res)

    
)
mecTurniraRouter.route('/unos_datum_vreme_lokacija').post(
    (req,res)=> new MecTurniraController().unos_datum_vreme_lokacija(req,res)

    
)
mecTurniraRouter.route('/provera_datum_vreme_lokacija').post(
    (req,res)=> new MecTurniraController().provera_datum_vreme_lokacija(req,res)

    
)
export default mecTurniraRouter;