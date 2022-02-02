import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: red;

  position: relative;
`;
const Arrow = styled.div`
  background-color: #fce3e3;
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
      
  `
  const Slide = styled.div`
    display: flex;
    align-items: center;
  `
  const ImgContainer = styled.div`

  `
  const InfoContainer = styled.div``
  const Image = styled.img``

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" >
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
