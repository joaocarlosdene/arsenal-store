import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../../../API/API";


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    loading: false,
    user: user ? user : null,
    isSuccess: false,
    isError:false,
    message: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return (
            state.loading = false,
            state.isSuccess = false,
            state.isError = false,
            state.message = ''
            )
        }
    },
    extrareducers(builder) {
        builder.addCase(postLogin.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(postLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true
                state.user = action.payload;
            })
            .addCase(postLogin.rejected, (state, action) => {
                state.loading = false;
                state.isError = true
                state.message = action.payload;
                state.user = null;
            });
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer