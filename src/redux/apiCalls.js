import { useState } from "react";
import { useDispatch } from "react-redux"
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logoutsuccess, RegisterFailure, RegisterStart, RegisterSuccess } from "./userRedux"

export const login = async ( dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        
        dispatch(loginSuccess(res.data))
    }catch(err){
        // const res = await publicRequest.post("/auth/login",user)
        dispatch(loginFailure(err.response.data))
        console.log(err);

    }
    
}
export const logout = async ( dispatch,user)=>{
    try{
        dispatch(logoutsuccess())
    }catch(err){
        console.log(err);

    }
    
}
export const register = async ( dispatch,user)=>{
    dispatch(RegisterStart());
    try{
        const res = await publicRequest.post("/auth/register",user)
        dispatch(RegisterSuccess(res.data))
    }catch(err){
        dispatch(RegisterFailure())

    }
    
}