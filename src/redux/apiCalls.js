import { useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { deleteProductFailed, deleteProductStarted, deleteProductSucceed } from "./cartRedux";
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  googleLogin,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutsuccess,
  MobileLoginFailure,
  MobileLoginStart,
  MobileLoginSuccess,
  OTPLoginFailure,
  OTPLoginStart,
  OTPLoginSuccess,
  RegisterFailure,
  RegisterStart,
  RegisterSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    // const res = await publicRequest.post("/auth/login",user)
    dispatch(loginFailure(err.response.data));
    console.log(err);
  }
};
export const Googlelogin = async (dispatch, user) => {
  const userEmail = await publicRequest.post("/users/email", {
    email: user.email,
  });

  if (userEmail.data !== null) {
    dispatch(googleLogin(userEmail.data[0]));
    console.log("user", userEmail.data[0]);
  } else {
    const res = await publicRequest.post("/users/addUser", {
      username: user.name,
      img: user.imageUrl,
      firstName: user.givenName,
      lastName: user.familyName,
      ...user,
    });
    dispatch(googleLogin(res.data));
    console.log("resadduser", res.data);
  }
};
export const OTPLogin = async (dispatch, { user }) => {
  dispatch(OTPLoginStart());
  try {
    const res = await publicRequest.post("/auth/login/otp", user);
    const data = res.data;

    dispatch(OTPLoginSuccess(res.data, { user }));
  } catch (err) {
    // const res = await publicRequest.post("/auth/login",user)
    dispatch(OTPLoginFailure(err.response.data));
    console.log(err);
  }
};
export const mobileLogin = async (dispatch, mobile) => {
  dispatch(MobileLoginStart());
  console.log(mobile);
  try {
    const res = await publicRequest.post("/auth/login/mobile", { mobile });
    console.log("res.data", res.data);

    dispatch(MobileLoginSuccess(res.data.status));
  } catch (err) {
    // const res = await publicRequest.post("/auth/login",user)
    dispatch(MobileLoginFailure(err.response.data));
    console.log(err);
  }
};
export const logout = async (dispatch, user) => {
  try {
    dispatch(logoutsuccess());
  } catch (err) {
    console.log(err);
  }
};
export const register = async (dispatch, user) => {
  dispatch(RegisterStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(RegisterSuccess(res.data));
  } catch (err) {
    dispatch(RegisterFailure());
  }
};
export const getUsers = async (dispatch, id) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get(`/users/userdetails/${id}`);
    console.log("res", res.data);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.put(`/users/update/${id}`, user);
    dispatch(updateUserSuccess(id, res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const deleteProduct = (product,dispatch)=>{
  dispatch(deleteProductStarted());
  try{
      // const res = await userRequest.delete(`/products/delete/${id}`)
      dispatch(deleteProductSucceed(product))
      console.log("id",product._id);
  console.log("buttn",product);

  }catch(err){
      dispatch(deleteProductFailed())

  }
  
}
