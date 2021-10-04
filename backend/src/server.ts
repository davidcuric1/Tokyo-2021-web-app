import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import sportistaRouter from './routes/sportista.routes';
import kodRouter from './routes/kod.routes';
import sportRouter from './routes/sport.routes';
import medaljaRouter from './routes/medalja.routes';
import sportDisciplinaRouter from './routes/sportdisciplina.routes';
import takmicenjeRouter from './routes/takmicenje.routes';
import lokacijaRouter from './routes/lokacija.routes';
import mecTurniraRouter from './routes/mecturnira.routes';
import rekordRouter from './routes/rekord.routes';



const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/db");
const con = mongoose.connection;
con.once('open', ()=>{
    console.log("Konekcija sa bazom uspesna.");
})

const router = express.Router();

router.use('/korisnik',korisnikRouter);
router.use('/sportista',sportistaRouter);
router.use('/kod',kodRouter);
router.use('/sport',sportRouter);
router.use('/medalja',medaljaRouter);
router.use('/sportdisciplina',sportDisciplinaRouter);
router.use('/takmicenje',takmicenjeRouter);
router.use('/lokacija',lokacijaRouter);
router.use('/mecturnira',mecTurniraRouter);
router.use('/rekord',rekordRouter);


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));