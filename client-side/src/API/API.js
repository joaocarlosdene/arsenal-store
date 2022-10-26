import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const URL = 'http://localhost:5000/products';



 const getProducts = createAsyncThunk('products/getproducts', async (arg, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(URL)
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }

})

export default getProducts;
