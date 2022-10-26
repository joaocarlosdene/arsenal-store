import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const URL = 'http://localhost:5000/products';


//GET 
 export const getProducts = createAsyncThunk('products/getProducts', async (arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(URL)
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }

})



//POST
export const postProducts = createAsyncThunk('products/postProducts', async (data) => {
    try {
        const response = await axios.post(URL, data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
});

