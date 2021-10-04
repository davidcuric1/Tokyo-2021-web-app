import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Runda = new Schema(
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
        trenutnaRunda:{
            type:Number
        }
        
    }
)

export default mongoose.model('Runda',Runda,'Runda');