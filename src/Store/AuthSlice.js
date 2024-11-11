import { createSlice } from "@reduxjs/toolkit";

const InitialAuthStateValue={isInitialAuth:false}

const authSlice=createSlice({
    name:'authentication',
    initialState:InitialAuthStateValue,
    reducers:{
        login(state){
            state.isInitialAuth=true;
        },
        logout(state){
            state.isInitialAuth=false
        }
    }
   
})

export const authAction=authSlice.actions;

export default authSlice;