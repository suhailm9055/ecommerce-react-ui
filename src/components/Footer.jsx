import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  WhatsApp,
} from "@material-ui/icons";
import { Roofing } from "@mui/icons-material";
import { ListItemAvatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";

const Container = styled.div`
  /* padding: 10px; */
  display: flex;
  padding:2% 15%;
  ${tablet({padding:"20px"})}
  ${mobile({ flexDirection: "column-reverse", padding: "15px" })}
`;
const Left = styled.div`
  padding-left: 10px;

  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({ display: "flex", flexDirection: "column", alignItems: "center" })}
`;
const Desc = styled.h5`
  margin: 4px 10px;
  width: 70%;
`;
const Logo = styled.h1`
  margin: 0px 10px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  margin: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  padding-left: 10px;
  ${mobile({ display: "flex", flexDirection: "column", alignItems: "center" ,justifyContent:"space-around"})}
`;
const Title = styled.h2`
  ${mobile({ width: "100%", textAlign: "center" })}
`;
const List = styled.ul`
  display: flex;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap",
  })}
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  })}
`;
const Contactitem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin-bottom: 10px;
  
  ${mobile({ width: "30%" ,justifyContent:"space-around"})}
`;
const Payment = styled.img`
  width: 35%;
  ${mobile({ display: "none" })}
`;

const Icons=styled.div`
  ${mobile({ display: "none" })}
`
const Footer = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <>
      <Container>
        <Left>
          <Logo>E-Shop</Logo>
          <Desc>
          E-Shop is an online Fashion and Lifestyle shopping company founded in
            Qatar. As of April 2022, E-shop operates in all areas inside Qatar
            and ensures the fastest delivery in the market
          </Desc>
          <SocialContainer>
            <SocialIcon color="#2c46a1">
              <Facebook />
            </SocialIcon>

            <SocialIcon color="#fc050e">
              <Instagram />
            </SocialIcon>

            <SocialIcon color="#14b446">
              <WhatsApp />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home </ListItem>
            <ListItem>Cart </ListItem>
            <ListItem>Boy Fashion </ListItem>
            <ListItem>Women Fashion </ListItem>
            <ListItem>Accessories </ListItem>
            <ListItem>My Account </ListItem>
            <ListItem>Order Tracking </ListItem>
            <ListItem>Wishlist </ListItem>
            <ListItem>Terms </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <Contactitem>
            <Icons>
              {" "}
              <Room style={{ marginRight: "10px" }} /></Icons> Calicut,Kerala
            
          </Contactitem>
          <Contactitem>
            <Icons>
              {" "}
              <Phone style={{ marginRight: "10px" }} />
            </Icons>
              +91 12345 67890
          </Contactitem>
          <Contactitem>
            <Icons>
              {" "}
              <MailOutline style={{ marginRight: "10px" }} />
            </Icons>
            Sales@eshop.com
          </Contactitem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJT4cLIx-U9ZTPsz_Z6EBE3qjHKxRW5K35-jW2sU3MhpPdaVl8WD1-55D3VJgdkR38fw&usqp=CAU" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
