import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const URL = 'http://localhost:5000/products';


//GET 
 export const getProducts = createAsyncThunk('products/getProducts', async (arg, {rejectWithValue}) => {
    try {
        const response = await axios.get(URL)
        return response.data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }

})

/*export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return fetch(URL)
    .then((resp)=> resp.json())
    .catch((error)=> console.log(error));
})
*/

//POST
export const postProducts = createAsyncThunk('products/postProducts', async (data) => {
    try {
        const response = await axios.post(URL, data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
});

//UPDATE
export const updateProducts = createAsyncThunk('products/updateProducts', async (Productsdata, {rejectWithValue}) => {
    const {_id} = Productsdata
    try {
        const response = await axios.put(`${URL}/${_id}`, Productsdata)
        return response.data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }

})

// DELETE
export const deleteProducts = createAsyncThunk('products/deleteProducts', async (id, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${URL}/${id}`)
        return response.data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }

})