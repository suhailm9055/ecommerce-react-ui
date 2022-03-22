import React, { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { Googlelogin, register } from "../redux/apiCalls";

import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from '../components/google/refreshToken';
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #adadad97, #2c2c2cd1),
    url("https://images.pexels.com/photos/5242808/pexels-photo-5242808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      no-repeat;
  display: flex;
  background-size:cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: linear-gradient(#fffdfdb7, #fffdfd3e);
  box-shadow: 0px 0px 15px 8px #423e3eab;
  border-radius: 10px;
  min-height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  ${mobile({width:"85%",display:'flex',flexDirection:'column',justifyContent:'center',AlignItems:'center'})}
  ${tablet({width:"85%",display:'flex',flexDirection:'column',justifyContent:'center',AlignItems:'center'})}
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align:center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  
  ${mobile({width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',AlignItems:'center'})}
`;
const Input = styled.input`
  flex: 1;
  font-size: 20px;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
  border: none;
  box-shadow: 2px 2px 5px 1px #11111153;
  border-radius: 4px;
  &:hover,:focus{
  box-shadow: 0px 0px 5px 1px #06d6d6dc;
  outline:none;
}
  
`;
const Agreement = styled.div`
  font-size: 15px;
  margin: 10px 0px;
`;

const ButtonContainer = styled.div`
width:100%;
    display:flex;
align-items:center;
  justify-content:center;
  margin-top:${(props) => (props.google ? "10px" : "0")};
`;
const Button = styled.button`
  padding: ${(props) => (props.google ? "0" : "5px 15px")};
  padding-top: ${(props) => (props.google ? "0" : "7px")};
  font-size: 20px;
  letter-spacing: 1px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`
;
const clientId =
  "638909240637-lj43pimncaemvl2eovmrnb2srcpii0e8.apps.googleusercontent.com";
const Register = () => {
  const [user, setUser] = useState({})
const dispatch = useDispatch()
  const handleChange =(e)=>{

    setUser((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  const handleSubmit = ()=>{
register(dispatch,user);
  }
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    Googlelogin(dispatch,res.profileObj)

    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };
  return (
    <>
      <Navbar user="notLoggedIn"/>
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input type="text" placeholder="First Name" name="firstname" onChange={handleChange}/>
          <Input type="text" placeholder="Last Name" name="lastname" onChange={handleChange}/>
          <Input type="text" placeholder="Username" name="username" onChange={handleChange}/>
          <Input type="email"  placeholder="Email" name="email" onChange={handleChange}/>
          <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <Input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange}/>
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY</b>
          </Agreement>

          <ButtonContainer>
            <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>
          </ButtonContainer>
        </Form>
        <Divider />
          <h3 style={{ textAlign: "center", fontWeight: "300" }}>OR</h3>
          <div
            style={{ display: "flex", flexDirection: "column",alignItems: "center",margin: "auto" }}
          >
            <ButtonContainer>
              <Link
                to="/login/mobile"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  fontSize: "20px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "rgb(255,255,255)",
                    color: "#4d4d4de6",
                  }}
                >
                  Register with Mobile
                </Button>
              </Link>
            </ButtonContainer>
            <ButtonContainer google="true">
              <Button
                google="true"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  color: "#4d4d4de6",
                  cursor: "pointer",
                }}
              >
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Register"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  style={{ marginTop: "100px",cursor: "pointer" ,opacity:"0.8"}}
                  isSignedIn={true}
                />
              </Button>
            </ButtonContainer>
          </div>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register
