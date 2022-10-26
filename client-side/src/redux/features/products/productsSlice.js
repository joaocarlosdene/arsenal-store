import { createSlice } from "@reduxjs/toolkit";
import  getProducts  from '../../../API/API'


const initialState =  {
    data: [],
    isSuccess:false,
    message: '',
    loading:false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: {
        [getProducts.pending]: (state, {payload}) =>{
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, {payload}) =>{
            state.loading = true;
            state.data = payload;
            state.isSuccess = true;
        },
        [getProducts.rejected]: (state, {payload}) =>{
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },
    }
    
})


export default productsSlice.reducer;