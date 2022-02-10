import React from 'react'
import styled from 'styled-components'
import  Navbar  from '../components/Navbar'
import  Announcements  from '../components/Announcements'
import  Footer  from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
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
  padding:20px;
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
  display:flex;
  justify-content:space-between;
`
const Info=styled.div`
  flex:3;
  
`

const Product=styled.div`
display:flex;
justify-content:space-between;
margin:5px;
`
const ProductDetail=styled.div`
flex:2;
display:flex;
`
const Image=styled.img`
width:35%;
height:auto;
`
const Details=styled.div`
padding:20px;

display:flex;
flex-direction:column;
justify-content:center;
letter-spacing:1px;
font-size:20px;

`
const ProductName=styled.span`

`
const ProductId=styled.span`

`
const ProductSize=styled.span`

`
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`
const PriceDetail=styled.div`
flex:1;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`
const ProductAmountContainer=styled.div`
  display:flex;
align-items:center;
margin-bottom:20px; 
`
const ProductAmount=styled.div`
   font-size:24px;
   margin:5px;
`
const ProductPrice=styled.div`
   font-size:30px;
   font-weight:200;
`
const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;
`
const Summary=styled.div`
flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:10px;
`
const SummaryTitle=styled.h1`
`
const SummaryItem=styled.div`
`
const SummaryItemText=styled.span`
`
const SummaryItemPrice=styled.span`
`
const Button=styled.button`
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
      <Bottom>

        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://hijabclothes.com/image/catalog/hooded-open-jacket-tsd1097-blue-86604-14-B.jpg"/>
              <Details>
                <ProductName><b>Product:</b>Winter Jacket </ProductName>
                <ProductId><b>ID:</b>446688 </ProductId>
                <ProductColor color="#2d437d"/>
                <ProductSize><b>Size:</b>L</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
              </ProductAmountContainer>
              <ProductPrice>299 QR</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr></Hr>
          <Product>
            <ProductDetail>
              <Image src="https://hijabclothes.com/image/catalog/hooded-open-jacket-tsd1097-orange-86619-14-B.jpg"/>
              <Details>
                <ProductName><b>Product:</b>Winter Jacket </ProductName>
                <ProductId><b>ID:</b>446688 </ProductId>
                <ProductColor color="#a12d1d"/>
                <ProductSize><b>Size:</b>L</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
              </ProductAmountContainer>
              <ProductPrice>299 QR</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>SubTotal</SummaryItemText>
          <SummaryItemPrice>299 QR</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>25 QR</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>-25 QR</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText type="total">Total</SummaryItemText>
          <SummaryItemPrice>299 QR</SummaryItemPrice>
        </SummaryItem>
        <Button>Checkout Now</Button>
        </Summary>
      </Bottom>
      </Wrapper>
      <Footer/>
         </Container>
  )
}

export default Cart