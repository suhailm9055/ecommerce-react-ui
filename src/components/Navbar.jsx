import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

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

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: large;
  color: #818181;
`
const Input = styled.input`
  border: none;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
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
  flex: 1;
  display: flex;
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/> 
            <Search/>
          </SearchContainer>
        </Left>
        <Center>
          {/* <Logo><br/>
         التوصيل السريع | قطر </Logo> */}
         <LogoEng>
         Delivering.Qa </LogoEng></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
