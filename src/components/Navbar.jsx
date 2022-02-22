import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import { mobile, tablet } from "../Responsive";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

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
  ${tablet({width:"40px"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline:20px;
  display:${props=>props.usercheck.user==="notLoggedIn" ? "none":"flex"};
`
const Center = styled.div`
  flex: 3;
  text-align: center;
  display:flex;
  /* justify-content:flex-end; */
  justify-content:${props=>props.usercheck.user==="notLoggedIn" ? "center":"flex-end"};
  display:${props=>props.display==="mobile" && "none"};

  ${mobile({display:props=>props.display==="mobile" ? "block":"none",justifyContent:props=>props.usercheck.user==="notLoggedIn" ? "center":"flex-end"})};
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
  ${tablet({marginRight: "10px"})}
`
const BadgeContainer=styled.div`
  display:${props=>props.usercheck.user==="notLoggedIn" ? "none":"block"};
  `
const Navbar = (user) => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <Container>
      <Wrapper>

        <LogoSearchContainer>
        <Left>
          <Language>EN</Language>
          <SearchContainer usercheck={user}>
            <Input placeholder="Search"/> 
            <Search  style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center display="mobile" usercheck={user}>
        <Link to="/">
          {/* <Logo><br/>
         التوصيل السريع | قطر </Logo> */}
         <LogoEng>
         QataRing.qa </LogoEng>
           </Link>
         </Center>
         </LogoSearchContainer>
         <Center display="lap" usercheck={user}>
         <Link to="/">
          {/* <Logo><br/>
         التوصيل السريع | قطر </Logo> */}
         <LogoEng>
         QataRing.qa </LogoEng>

         </Link>
         </Center>


        <Right>
          <MenuItem>Register</MenuItem>
          <Link to='/login'>
          <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
          
         <BadgeContainer usercheck={user}>
           <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlined color="black" />
    </Badge>
           </BadgeContainer> 
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
