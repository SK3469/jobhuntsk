import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user:null   //agar single cheez rakhni ho to null rahegaa user
    },
    reducers: {
        //actions..    //for dispaching
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})
export const { setLoading,setUser}= authSlice.actions;
export default authSlice.reducer;