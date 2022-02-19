import React, { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";
import Navbar from "../components/Navbar";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container=styled.div`
width:100vw;
height:90.1vh;
background:linear-gradient(to right,#adadad97,#2c2c2cd1), url("https://images.pexels.com/photos/5704412/pexels-photo-5704412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
display:flex;
background-size:center;
align-items:center;
  justify-content:center;
`
const Wrapper=styled.div`
width:30%;
padding:20px;
background:linear-gradient(#fffdfdb7,#fffdfd3e);
box-shadow: 0px 0px 15px 8px #423e3eab;
border-radius:10px;
min-height:50%;
display:flex;
justify-content:center;
flex-direction:column;
${mobile({width:"80%"})}
${tablet({width:"70%"})}
`
const Title=styled.h1`
text-align:center;
font-size:28px;
font-weight:300;
padding:10px 0;
${mobile({fontSize:"38px"})}
`
const Form=styled.form`

    display:flex;
align-items:center;
  justify-content:center;
flex-wrap:wrap;
`
const Input=styled.input`

font-size:20px;
min-width:60%;
margin:20px 10px 0px 0px;
padding:5px;
border: none;
box-shadow: 2px 2px 5px 1px #11111153;
border-radius:4px;
${mobile({fontSize:"20px",width:"75%" })};
&:hover,:focus{
  box-shadow: 0px 0px 5px 1px #06d6d6dc;
  outline:none;
}
`

const ButtonContainer=styled.div`
width:100%;
display:flex;
align-items:flex-end;
justify-content:center;
padding:20px;
`
const Button=styled.button`

padding: 5px 15px;
padding-top: 7px;
font-size: 20px;
letter-spacing: 1px;
/* border-radius: 25px; */
font-weight: 500;
background: #008080;
color: #fff;
text-align: center;
cursor: pointer;
border-radius:4px;
border: 1px solid #006363;
box-shadow: 2px 2px 5px 1px #11111153;
transition: all 0.5s ease;
&:hover{
    transform:scale(1.1) ;
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
}
${mobile({width:"120px"})}
`

const LinkContainer=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
const Link=styled.a`
width:100%;

font-size:16px;
text-decoration:underline;
cursor:pointer;
${mobile({fontSize:"14px"})}
`

const Login = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()
const handleClick =(e)=>{
  e.preventDefault()
  login(dispatch,{username,password})
}

  return (
    <>
      <Navbar user="notLoggedIn"/>
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username or Email" onChange={(e)=>setUsername(e.target.value)}/>
                <Input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
           

            <ButtonContainer onClick={handleClick}>
           <Button >LOG IN</Button>

            </ButtonContainer>
            <LinkContainer>
            
            <Link>FORGOT YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </LinkContainer>
            
        </Form>
        </Wrapper>


    </Container>
    </>
  )
}

export default Login