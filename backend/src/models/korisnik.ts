import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Korisnik = new Schema(
    {
        
        korisnicko:{
            type:String,required: [true, 'Korisnickoo je obavezno.']
        },
        lozinka:{
            type:String
        },
        ime:{
            type:String
        }, 
        prezime:{
            type:String
        },
       
        email:{
            type:String
        },
        tip:{
            type: String
        },
        nacionalnost:{
            type:String
        },
        
        odobren:{
            type:Number
        },
        brtak:{
            type:Number
        }

        
    }
)

export default mongoose.model('Korisnik',Korisnik,'Korisnici');