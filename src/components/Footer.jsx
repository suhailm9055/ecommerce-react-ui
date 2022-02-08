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
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
`;
const Left = styled.div`
padding-left:10px;

  flex: 1;
  display: flex;
  flex-direction: column;
  
  `;
  const Desc= styled.h5`
  margin:4px 10px;
  width:70%;`
const Logo = styled.h1`
margin:0px 10px;
`
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
`;
const Title = styled.h2``;
const List = styled.ul`
  display: flex;
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
`;
const Contactitem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
const Payment=styled.img`
width:35%;`

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>QataRing.qa</Logo>
          <Desc>Ring is an online Fashion & Lifestyle shopping company founded in Qatar. As of April 2022, Talabat operates in all areas inside Qatar and ensures the fastest delivery in the market</Desc>
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
            <Room style={{ marginRight: "10px" }} /> Doha,Qatar
          </Contactitem>
          <Contactitem>
            <Phone style={{ marginRight: "10px" }} />
            +974 1234 5678
          </Contactitem>
          <Contactitem>
            <MailOutline style={{ marginRight: "10px" }} />
            ring@qataring.qa
          </Contactitem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJT4cLIx-U9ZTPsz_Z6EBE3qjHKxRW5K35-jW2sU3MhpPdaVl8WD1-55D3VJgdkR38fw&usqp=CAU"/>
          
        </Right>
      </Container>
    </>
  );
};

export default Footer;
