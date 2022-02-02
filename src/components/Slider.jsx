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
    flex: 1;
  `
  const InfoContainer = styled.div`
  flex:1;
  z-index: 1;
  `
  const Image = styled.img`
margin-left: 10%;
  max-width: 100%;
  height: 100%;
  `
  const Tittle = styled.h1``
  const Desc = styled.p``
  const Button = styled.button``

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
                asdsadasd
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
