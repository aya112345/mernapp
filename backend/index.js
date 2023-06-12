import express from 'express';

import cors from 'cors';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';

// import routers
import usersRoutes from './routes/users.js';


const app = express();

const PORT = 8000;


const URL = 'mongodb+srv://eyalabidi:ayoutalol@app.6vw7jkg.mongodb.net/'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => PORT, () => console.log(`database is connected`))
    .catch((error) => console.log(`Error: ${error}`));

app.use(bodyParser.json());

// middelware
app.use(cors());

// import routes 
app.use('/users',usersRoutes);

app.get('/',  (req, res) => {
// console.log('[TEST]!');


res.send('Hello from Homepage.');
});

// create server
app.listen(PORT, () => console.log (`Server Running on port:http://localhost:${PORT}`));