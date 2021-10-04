import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Medalja = new Schema(
    {
        
       
        drzava:{
            type:String
        }, 
        zlata:{
            type:Number
        },
        srebra:{
            type:Number
        },
        bronze:{
            type:Number
        },
        ukupno:{
            type:Number
        }
        
    }
)

export default mongoose.model('Medalja',Medalja,'Medalje');