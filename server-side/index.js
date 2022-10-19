import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/products.js';
import mongoose from 'mongoose';


import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()




const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello From Home-Page');
});


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.jqiorjd.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> {
        console.log('Conectamos ao MONGO DB!')
        app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
    })
    .catch((err) => console.log(err))

//mongodb+srv://andernego48:<password>@arsenalstore.jqiorjd.mongodb.net/?retryWrites=true&w=majority
