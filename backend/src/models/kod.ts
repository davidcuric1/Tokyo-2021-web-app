import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Kod = new Schema(
    {
        
       
        ime:{
            type:String
        }, 
        kod:{
            type:String
        }
        
    }
)

export default mongoose.model('Kod',Kod,'Kodovi');