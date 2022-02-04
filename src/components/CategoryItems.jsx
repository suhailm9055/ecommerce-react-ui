import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 4px;
    height: 70vh;
    position: relative;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`
const Title = styled.h1`
        
`
const Button = styled.button`
    
`

const CategoryItems = ({item}) => {
  return(
   <>
    <Container>
    <Img src={item.img}/>
    <Info>
    <Title>{item.title}</Title>
    <Button>Shop Now</Button>
    </Info>
    </Container>
  </>

  )
};

export default CategoryItems;
