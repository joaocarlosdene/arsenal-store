import express from 'express';
import productModel from '../models/productModel.js'


const router = express.Router();


//GET REQUEST
router.get('/', async (req, res)=>{
    try {
        const product = await productModel.find()

        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
});



//POST REQUEST
router.post('/', async (req, res) =>{
    const {foto, marca, preco} = req.body;

    const produto = {
        foto,
        marca,
        preco
    }

    //CONFIR DATA
    if(!foto || !marca || !preco){
        return res.status(400).json({ message: 'Todos os campos sao requeridos!.'})
    }

    //CREATE AND STORE A NEW PRODUCT
    const Product = await productModel.create(produto);

    if (Product){ //Created
        res.status(201).json({ message: 'Novo Usuario Criado'})
    } else {
        res.status(400).json('Dados recebidos invalidos!')
    }

})

export default router;