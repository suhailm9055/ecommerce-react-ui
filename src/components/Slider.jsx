import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import littleBoyJumping from "../images/cute-little-boy-jumping-on-white-background-814280-removebg-preview.png"
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 87vh;
  background-color: #dedee0;

  position: relative;
`;
const Arrow = styled.div`
  background-color: #50505075;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  cursor: pointer;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  left: ${props=>props.direction === 'left' && "10px"};
  right: ${props=>props.direction === 'right' && "10px"};
  `;
  const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      
  `
  const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
      width: 100%;
 `  

  
  const ImgContainer = styled.div`
 
  height: 100%;
    flex: 1;
  `
  const InfoContainer = styled.div`
  flex:1;
 padding: 50px;
 
  `
  const Image = styled.img`
margin-left: 10%;
  
  height: 90%;
  `
  const Tittle = styled.h2`
  font-size:70px;
  letter-spacing: 3px;
  text-shadow:3px 3px #72717175;
  `
  const Desc = styled.p`
  margin: 50px 0px;
  padding-right: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  `
  const Button = styled.button`
  padding:5px 15px;
  padding-top: 7px;
  font-size: 20px;
  letter-spacing: 2px;
  border-radius: 25px;
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align:center;
  border-color: #00000032;
  cursor: pointer;
  box-shadow:2px 2px 5px 1px #11111153;
  
  `

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        
          <Slide>
              <ImgContainer>
              <Image src={littleBoyJumping}/>
              
              </ImgContainer>
              <InfoContainer>
                <Tittle>Best Selling Styles</Tittle>
                <Desc>DON'T COMPROMISE ON STYLES! GET FLAT 25% OFF FOR NEW ARRIVALS.</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
          </Slide>
          
      </Wrapper>
      <Arrow direction="right" >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
