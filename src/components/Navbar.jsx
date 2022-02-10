import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  color: #2e2e2e;
  margin-top: auto;
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  
`;

const LogoSearchContainer=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  ${mobile({flexDirection:"row-reverse"})}
  `
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: large;
  color: #818181;
  ${mobile({display:"none"})}
`
const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline:20px;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
font-family: 'Noto Kufi Arabic', sans-serif;
font-size:22px;
font-weight:900;
  
`
const LogoEng = styled.h1`

font-weight: bold;
position: relative;
    /* top: -15px; */
  
`
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  ${mobile({flex: "3"})}
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({marginRight: "5px"})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <LogoSearchContainer>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/> 
            <Search  style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          {/* <Logo><br/>
         التوصيل السريع | قطر </Logo> */}
         <LogoEng>
         QataRing.qa </LogoEng>
         </Center>
         </LogoSearchContainer>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined color="black" />
    </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
