//import { Time } from '@angular/common';
import  Sportista  from '../models/sportista';
import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let MecTurnira = new Schema(
    {
        
       
        igrac1:{
            type:Array
        }, 
        igrac2:{
            type:Array
        },
        sport:{
            type:String
        },
        rezultat:{
            type:String
        },
        datpocetka:{
            type:Date
        },
        vreme:{
            type:String
        },
        lokacija:{
            type:String
        },
        runda:{
            type:Number
        },
        disciplina:{
            type:String
        },
        id_delegata:{
            type:String
        },
        pol:{
            type:String
        }
        
    }
)

export default mongoose.model('MecTurnira',MecTurnira,'MeceviTurnira');