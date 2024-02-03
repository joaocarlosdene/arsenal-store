import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRouter.js';
import userRoutes from './routes/userRouter.js'
import mongoose from 'mongoose';
import cors from 'cors';


import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.json({limit: '100kb'}));

//ROUTES
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello From Home-Page');
});

//CONECTION DATA BASE
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.jqiorjd.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> {
        console.log('Conectamos ao MONGO DB!')
        app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
    })
    .catch((err) => console.log(err))



