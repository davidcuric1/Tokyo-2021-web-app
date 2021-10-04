import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Rekord = new Schema(
    {
        
       
        ime:{
            type:String
        }, 
        prezime:{
            type:String
        },
        nacionalnost:{
            type:String
        },
        igre:{
            type:String
        },
        disciplina:{
            type:String
        },
        pol:{
            type:String
        },
        rezultat:{
            type:String
        }
        
    }
)

export default mongoose.model('Rekord',Rekord,'Rekordi');