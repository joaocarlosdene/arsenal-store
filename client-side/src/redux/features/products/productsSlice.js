import { createSlice } from "@reduxjs/toolkit";
import  { getProducts, postProducts }  from '../../../API/API'


const initialState =  {
    data: [{_id:'',foto:'', marca:'',preco:''}],
    loading:false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers (builder) {
        builder.addCase(getProducts.pending, (state, action) =>{
                    state.loading = true;
        })
                .addCase(getProducts.fulfilled, (state, action) =>{
                    
                    state.loading = false;
                    state.data = action.payload;
                    
        })
                .addCase(getProducts.rejected, (state, action) =>{
                    
                    state.loading = false;
                    
        });
        builder.addCase(postProducts.pending, (state, action) =>{
            state.loading = true;
        })
        .addCase(postProducts.fulfilled, (state, action) =>{
            state.loading = true;
            state.data = action.payload;
            state.status = true;
        })
        .addCase(postProducts.rejected, (state, action) =>{
            state.message = action.payload;
            state.loading = false;
            state.status = false;
        });
    }
    
    
        /*[getProducts.pending]: (state, {payload}) =>{
            state.loading = true;
        },
        /*[getProducts.fulfilled]: (state, {payload}) =>{
            state.loading = true;
            state.data = payload;
            state.isSuccess = true;
        },
        [getProducts.rejected]: (state, {payload}) =>{
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },
        
        [postProducts.pending]: (state, {payload}) =>{
            state.loading = true;
        },
        [postProducts.fulfilled]: (state, {payload}) =>{
            state.loading = true;
            state.data = payload;
            state.isSuccess = true;
        },
        [postProducts.rejected]: (state, {payload}) =>{
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },*/
    
    
})

export const selectProductById = (state, productId) => {
    state.products.find(product => product._id ===productId)
}
 

export const selectAllproducts = (state) => state.products;

export default productsSlice.reducer;