import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let SportDisciplina = new Schema(
    {
        
       
        sport:{
            type:String
        }, 
        disciplina:{
            type:String
        },
        tip:{
            type:String
        },
        tip_rezultata:{
            type:String
        }
        
    }
)

export default mongoose.model('SportDisciplina',SportDisciplina,'SportDisciplina');