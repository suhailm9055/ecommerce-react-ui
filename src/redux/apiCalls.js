import { useState } from "react";
import { useDispatch } from "react-redux"
import { publicRequest } from "../requestMethods";
import { googleLogin, loginFailure, loginStart, loginSuccess, logoutsuccess, MobileLoginFailure, MobileLoginStart, MobileLoginSuccess, OTPLoginFailure, OTPLoginStart, OTPLoginSuccess, RegisterFailure, RegisterStart, RegisterSuccess } from "./userRedux"

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
export const Googlelogin = async ( dispatch,user)=>{
    const res = await publicRequest. post("/users/addUser",{username:user.name,img:user.imageUrl,firstname:user.givenName,Lastname:user.familyName,...user})
    dispatch(googleLogin(res.data));
   
    
}
export const OTPLogin = async ( dispatch,{user})=>{
    dispatch(OTPLoginStart());
    try{
        const res = await publicRequest.post("/auth/login/otp",user)
        const data=res.data
        
        dispatch(OTPLoginSuccess(res.data,{user}))
    }catch(err){
        // const res = await publicRequest.post("/auth/login",user)
        dispatch(OTPLoginFailure(err.response.data))
        console.log(err);

    }
    
}
export const mobileLogin = async ( dispatch,mobile)=>{
    dispatch(MobileLoginStart());
    console.log(mobile);
    try{
        const res = await publicRequest.post("/auth/login/mobile",{mobile})
        console.log("res.data",res.data);
        
        dispatch(MobileLoginSuccess(res.data.status))
    }catch(err){ 
        // const res = await publicRequest.post("/auth/login",user)
        dispatch(MobileLoginFailure(err.response.data))
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