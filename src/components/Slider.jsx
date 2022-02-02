import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import smileyGirl from "../images/smiley-little-girl-red-dress.jpg"
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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
  position: absolute;
  left: 0;
  right:0;
  margin: auto;
  width: 90%;
  height: 100vh;
  `
  const Tittle = styled.h1``
  const Desc = styled.h``
  const Button = styled.button``

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        
          <Slide>
              <Image src={smileyGirl}/>
              <ImgContainer>
              
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
