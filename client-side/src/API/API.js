import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const URL = 'https://arsenal-store.vercel.app/products';
//const URL = 'http://localhost:5000/products'; (Usar essa para ambiente local)
const Login = 'http://localhost:5000/users/login'
const SignUp = 'http://localhost:5000/users/signUp'


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

//POST LOGIN
export const postLogin = createAsyncThunk('users/postLogin', async (data) => {
    try {
        const response = await axios.post(Login, data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
});
//POST SIGNUP
export const postSignup = createAsyncThunk('users/postSignup', async (data) => {
    try {
        const response = await axios.post(SignUp, data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
});

//UPDATE
export const updateProducts = createAsyncThunk('products/updateProducts', async (Productsdata, {rejectWithValue}) => {
    const {_id, marca, preco, foto} = Productsdata
    try {
        const response = await axios.patch(`${URL}/${_id}`, Productsdata)
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