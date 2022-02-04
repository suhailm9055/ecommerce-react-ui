import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000050;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 288px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
      opacity: 1;
  }
  &:hover ${Circle}{
    z-index:2;
    background-color: #fff2f25e;
  }

`;

const Image = styled.img`
  height: 75%;
  z-index: 1;
`;


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #04c9c9ce;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all 0.2s ease;
color:white;
box-shadow: 2px 2px 5px 1px #11111153;
&:hover{
    background-color: #04c9c9ce ;
    transform: scale(1.1);
    cursor: pointer;
    border: 1px solid #ffffffce;

}
`;
const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    </>
  );
};

export default Product;
