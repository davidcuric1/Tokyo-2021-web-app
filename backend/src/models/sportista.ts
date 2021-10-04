import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Sportista = new Schema(
    {
        
       
        ime:{
            type:String
        }, 
        prezime:{
            type:String
        },
       
        pol:{
            type:String
        },
        sport:{
            type: String
        },
        discipline:{
            type:Array
        },
        
        nacionalnost:{
            type:String
        },
        osvojio_medalju:{
            type:Number
        },
        nosilac:{
            type:Number
        }

        
    }
)

export default mongoose.model('Sportista',Sportista,'Sportisti');