import { createSlice } from "@reduxjs/toolkit";
import  { getProducts, postProducts, deleteProducts, updateProducts }  from '../../../API/API'


const initialState =  {
    data: [{_id:'',foto:'', marca:'',preco:''}],
    loading:false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers (builder) {
        //GET -------------------------------------------------------------
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

        //POST -------------------------------------------------------------
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

        //UPDATE ----------------------------------------------------------
        builder.addCase(updateProducts.pending, (state, action) =>{
            state.loading = true;
        })
        .addCase(updateProducts.fulfilled, (state, action) =>{
            
            state.loading = false;
            console.log("action", action);
            const {_id, marca, preco, foto} = action.payload.payload;

            
            const product = state.products.filter((item) => item._id !== _id)
            
            state.products = [...product, action.payload];
            
            
        })
        .addCase(updateProducts.rejected, (state, action) =>{
            
            state.loading = false;
            
        });


        //DELETE ----------------------------------------------------
        builder.addCase(deleteProducts.pending, (state, action) =>{
            state.loading = true;
        })
        .addCase(deleteProducts.fulfilled, (state, action) =>{
            
            state.loading = false;
            console.log("action", action);
            const {arg} = action.meta;
            if (arg) {
                state.data = state.data.filter((item) => item._id !== arg)
            }
            
            
        })
        .addCase(deleteProducts.rejected, (state, action) =>{
            
            state.loading = false;
            
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


 
 
export const selectAllproducts = (state) => state.products;
export const selectProductById = (state) => state.products._id


export default productsSlice.reducer;

