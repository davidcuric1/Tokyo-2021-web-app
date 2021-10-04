import Korisnik from "../models/korisnik"
import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Takmicenje = new Schema(
    {
        
       
        sport:{
            type:String
        }, 
        disciplina:{
            type:String
        },
       
        pol:{
            type:String
        },
        datpocetka:{
            type: String
        },
        datkraja:{
            type:String
        },
        lokacija:{
            type:String
        },
        vreme:{
            type:String
        },
        brucesnika:{
            type:Number
        },
        ucesnici:{
            type:Array
        },
        
        delegat:{
            type:String
        },
        id_delegata:{
            type:String
        }


        
    }
)

export default mongoose.model('Takmicenja',Takmicenje,'Takmicenja');