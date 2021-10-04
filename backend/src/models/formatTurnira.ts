import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let FormatTurnira = new Schema(
    {
        
       
        sport:{
            type:String
        }, 
        disciplina:{
            type:String
        },
        format_rezultata:{
            type:String
        },
        opsezi:{
            type:Array
        },
        dozvoljeni_rezultati:{
            type:Array
        },
        broj_serija:{
            type:Array
        },
        broj_takmicara:{
            type:Array
        },
        tip_rezultata:{
            type:String
        }
        
    }
)

export default mongoose.model('FormatTurnira',FormatTurnira,'Formati');