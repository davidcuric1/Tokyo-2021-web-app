import express from 'express';
import { SportDisciplinaController } from '../controllers/sportdisciplina.controller';


const sportDisciplinaRouter=express.Router();

sportDisciplinaRouter.route('/dohvati_tip_rezultata_discipline').post(
    (req,res)=> new SportDisciplinaController().dohvati_tip_rezultata_discipline(req,res)

    
)

sportDisciplinaRouter.route('/dohvati_po_imenu').post(
    (req,res)=> new SportDisciplinaController().dohvati_po_imenu(req,res)

    
)

sportDisciplinaRouter.route('/dohvati_individualne').get(
    (req,res)=> new SportDisciplinaController().dohvati_individualne(req,res)

    
)

sportDisciplinaRouter.route('/dodaj').post(
    (req,res)=> new SportDisciplinaController().dodaj(req,res)

    
)
sportDisciplinaRouter.route('/proveri_disciplinu').post(
    (req,res)=> new SportDisciplinaController().proveri_disciplinu(req,res)

    
)
sportDisciplinaRouter.route('/proveri_sport').post(
    (req,res)=> new SportDisciplinaController().proveri_sport(req,res)

    
)

export default sportDisciplinaRouter;