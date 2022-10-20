import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    foto: String,
    marca: String,
    preco: String
})

const productModel =  mongoose.model('productModel', productSchema);

export default productModel;