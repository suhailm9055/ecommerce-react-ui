import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container=styled.div`
height:20%;
padding-bottom: 3%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:#f5fbfd;
${mobile({height:"20%"})}
    
`
const Title= styled.h1`
font-size:70px;
margin:10px;

letter-spacing: 3px;
  text-shadow: 3px 3px #72717175;
`
const Description= styled.div`
font-size:24px;
margin-bottom:10px;
${mobile({textAlign:"center",padding:"0 40px"})}
`
const InputContainer= styled.div`
margin:10px;
width:40%;
height:35px;
box-shadow: 0px 0px 7px 1px #11111153;
border: 1px solid #fff2f25e;
background:white;
display:flex;
justify-content:space-between;
padding:0;
${mobile({width:'70%'})}

`
const Input= styled.input`
border:none;
outline:none;
flex:6;
font-size:18px;
padding-left:20px;

`
const Button= styled.button`
flex:1;
display:flex;
justify-content:center;
align-items:center;
height:100%;
font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border:none;
  transition: all 0.5s ease;
  &:hover,&:focus{
    transform:scale(1.1) ;
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
  ${mobile({flex:"2"})}
`

const Newsletter = () => {
  return(
       <Container>
      <Title>News Letter</Title>
      <Description> Get timely updates for your favorite products ands offers.</Description>
      <InputContainer>
      
      <Input placeholder='Your Email'/>
      <Button>
          <Send/>
      </Button>
      </InputContainer>
  </Container>
  )
};

export default Newsletter;
