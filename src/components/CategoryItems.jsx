import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
        margin: 5px 5px;
        letter-spacing: 2px;
        color: white;
        transition: all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 4px;
    
    position: relative;
    transition: all 0.5s ease;
    &:hover ${Title}{
     font-size:50px;
     overflow: hidden;
      
    }
`
const Img = styled.img`
    width: 100%;
    
    object-fit: cover;
    overflow:hidden;
   
   
    
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Button = styled.button`
    padding: 3px 7px;
  padding-top: 7px;
  font-size: 20px;
  letter-spacing: 2px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080a6;
  color: #fff;
  text-align: center;
  border-color: #00000032;
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover{
    transform:scale(1.1) ;
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`

const CategoryItems = ({item}) => {
  return(
   <>
    <Container>
    <Img src={item.img}/>
    <Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
    </Info>
    </Container>
  </>

  )
};

export default CategoryItems;
