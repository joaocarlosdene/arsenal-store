import productModel from '../models/productModel.js'

//Get request 
 export const getMethod = async (req, res)=>{
    try {
        const product = await productModel.find()

        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}



// Get request ID
export const getMethodID = async (req, res) =>{
    const id = req.params.id

    try {
        const product = await productModel.findOne({_id:id})

        res.status(200).json(product)
    } catch (error) {
        res.status(422).json({message: 'O usuario nao foi encontrado!'})
    }
}


//Post request
export const postMethod = async (req, res) =>{
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

}

//Update request 
 export const updateMethod = async (req,res) =>{
    const id = req.params.id
    const {foto, marca, preco} = req.body;

    const produto = {
        foto,
        marca,
        preco
    }

    try {
        const updateProduct = await productModel.updateOne({_id:id}, produto)

        if(updateProduct.matchedCount === 0){
            res.status(422).json({message: 'O usuario nao foi encontrado!'})
            return
        }

        res.status(200).json(produto)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Delete request 
 export const deleteMethod = async(req, res) =>{
    const id = req.params.id
    const product = await productModel.findOne({_id:id})

    if(!product){
        res.status(422).json({message: 'O usuario nao foi encontrado!'})
        return
    }

    try {
        await product.deleteOne({_id:id})

        res.status(200).json({message:'Usuario removido com sucesso!'})
    } catch (error) {
        
    }
}

//export default  {getMethod, getMethodID, deleteMethod, updateMethod, postMethod};

