import React from 'react'
import styled from 'styled-components'
import  Navbar  from '../components/Navbar'
import  Announcements  from '../components/Announcements'
import  Footer  from '../components/Footer'
const Container=styled.div`
  
`
const Wrapper=styled.div`
  padding:20px;

`
const Title=styled.h1`
  font-weight:300;
  text-align:center;
`
const Top=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const TopButton=styled.button`

  padding:10px;
  font-weight:600;
  letter-spacing:1px;
  cursor:pointer;
  border:${props=>props.type === "filled" ? "1px solid #006363":'1px solid #616161dc'};
  background-color:${props=>props.type === "filled" ? "#008080":"#ffffff"};
  color:${props=>props.type === "filled" && "white"};
  transition: all 0.5s ease;
  &:hover{
    transform:scale(1.1) ;
    background:${props=>props.type === "filled" ? "#06d6d6dc":"#ffffff"};
    color:#4d4d4de6;
    font-weight: bold;
    border:${props=>props.type === "filled" ? "1px solid #006363":'1px solid #06d6d6dc'};
  }
`
const TopTexts=styled.div`
  
`
const TopText=styled.span`
  text-decoration:underline;
  cursor:pointer;
  margin:0px 10px;

`


const Bottom=styled.div`
  
`

const Cart = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/> 
      <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton >CONTINUE SHOPPING</TopButton>
        <TopTexts >
          <TopText> Shopping Bag(2)</TopText>
          <TopText >Your Wishlist(0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom></Bottom>
      </Wrapper>
      <Footer/>
         </Container>
  )
}

export default Cart