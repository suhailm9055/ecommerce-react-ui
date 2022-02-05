import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  background-color: #dedee0;
  overflow-x: hidden;
  position: relative;
`;
const Arrow = styled.div`
z-index: 2;
  background-color: #008080a4;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  cursor: pointer;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
transition: all 1.5s ease;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100vw;
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
`;
const Image = styled.img`
  margin-left: 10%;
  height: 90%;
  object-fit: cover;
`;
const Tittle = styled.h2`
  font-size: 80px;
  letter-spacing: 3px;
  text-shadow: 3px 3px #72717175;
`;
const Desc = styled.p`
  margin: 50px 0px;
  padding-right: 20px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 4px;
`;
const Button = styled.button`
  padding: 5px 15px;
  padding-top: 7px;
  font-size: 20px;
  letter-spacing: 2px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover{
    transform:scale(1.1) ;
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>
            <InfoContainer>
              <Tittle>{items.tittle}</Tittle>
              <Desc>{items.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")} >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
