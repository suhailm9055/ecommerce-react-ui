import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:null,
        error:null
    },
    reducers:{
        loginStart:(state)=>{ 
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure:(state)=>{ 
            state.isFetching = false;
            state.error = true
        },
        RegisterStart:(state)=>{ 
            state.isFetching = true
        },
        RegisterSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.error = false
        },
        RegisterFailure:(state)=>{ 
            state.isFetching = false;
            state.error = true
        },
        
        logoutsuccess:(state)=>{ 
            state.currentUser = null
        }
        }
})

export const {loginStart,loginSuccess,loginFailure,RegisterStart,RegisterSuccess,RegisterFailure,logoutsuccess}= userSlice.actions
export default userSlice.reducer;