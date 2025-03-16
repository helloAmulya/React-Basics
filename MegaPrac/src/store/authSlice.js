
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // status means that user is not authentiacated
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    // state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false,
    //   })

    /* in place of reducer we have not used "push" because we are not working with the arrays., we are working with the objects
    */
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },



        logout: (state) => {
            state.status = false,
                state.userData = null;
        }

    }

})

export const { login, logout } = authSlice.actions
// the above is the basic syntax to export the reducer functions (login,logout)

export default authSlice.reducer;
