import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Rezultat = new Schema(
    {
        
       
        id_sportiste:{
            type:String
        }, 
        ime:{
            type:String
        },
        prezime:{
            type:String
        },
        disciplina:{
            type:String
        },
        pol:{
            type:String
        },
        runda:{
            type:Number
        },
        rez:{
            type:Number
        }
        
    }
)

export default mongoose.model('Rezultat',Rezultat,'Rezultat');