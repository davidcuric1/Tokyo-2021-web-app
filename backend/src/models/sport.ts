import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Sport = new Schema(
    {
        
       
        naziv:{
            type:String
        }, 
        discipline:{
            type:Array
        },
       
        vrsta:{
            type:Array
        },
        min:{
            type: Array
        },
        max:{
            type:Array
        },
        tip_takmicenja:String,
        tip_rezultata:{
            type:String
        }

        
    }
)

export default mongoose.model('Sportovi',Sport,'Sportovi');