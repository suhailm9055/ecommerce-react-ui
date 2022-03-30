import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { mobile, tablet } from "../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDropMenu from "./UserDropMenu";
import { Box, IconButton, Tooltip } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  color: #2e2e2e;
  z-index: 99;
  margin-top: auto;
  position: sticky;
  top: 0px;
  width: 100%;
  `;
const Wrapper = styled.div`
  padding: 0px 20px;
  position: sticky;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  z-index: 99;
`;

const LogoSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  ${mobile({ flexDirection: "row-reverse" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: large;
  color: #818181;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "40px" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 20px;
  display: ${(props) =>
    props.usercheck.user === "notLoggedIn" ? "none" : "flex"};
`;
const Center = styled.div`
  flex: 3;
  text-align: center;
  display: flex;
  /* justify-content:flex-end; */
  justify-content: ${(props) =>
    props.usercheck.user === "notLoggedIn" ? "center" : "flex-end"};
  display: ${(props) => props.display === "mobile" && "none"};

  ${mobile({
    display: (props) => (props.display === "mobile" ? "block" : "none"),
    justifyContent: (props) =>
      props.usercheck.user === "notLoggedIn" ? "center" : "flex-end",
  })};
`;
const Logo = styled.h1`
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 22px;
  font-weight: 900;
`;
const LogoEng = styled.h1`
  font-weight: bold;
  position: relative;
  /* top: -15px; */
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: "3" })}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    color: #4d4b4b;
    transform: scale(1.1);
  }
`;

const MenuItem = styled.div`
  // font-style: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${mobile({ marginRight: "5px" })}
  ${tablet({ marginRight: "10px" })}
`;
const BadgeContainer = styled.div`
  display: ${(props) =>
    props.usercheck.user === "notLoggedIn" ? "none" : "block"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = (user) => {
  // const [userCart,setUserCart]= useState({currentUser})
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user?.currentUser);

  return (
    <Container>
      <Wrapper>
        <LogoSearchContainer>
          <Left>
            <Language>EN</Language>
            <SearchContainer usercheck={user}>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center display="mobile" usercheck={user}>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
             
              <LogoEng>E-Shop </LogoEng>
            </Link>
          </Center>
        </LogoSearchContainer>
        <Center display="lap" usercheck={user}>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          
            <LogoEng>e-Shop </LogoEng>
          </Link>
        </Center>

        <Right>
         

          {currentUser && (
            <MenuItem>
              <IconContainer>
                <Link
                  to="/cart"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                  
                    <Tooltip title="My Cart">
                      <IconButton
                        size="small"
                        sx={{ ml: 0, backgroundColor: "#f4ffff" }}
                      
                      >
                        <BadgeContainer usercheck={user}>
                          <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined
                              sx={{ width: 30, height: 30 }}
                              color="black"
                            />
                          </Badge>
                        </BadgeContainer>
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Link>
              </IconContainer>
            </MenuItem>
          )}
          <MenuItem>
            <IconContainer>
              <UserDropMenu />
            </IconContainer>
          </MenuItem>
          {/* <Link to='/login' style={{ color: "inherit", textDecoration: "inherit" }}> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
