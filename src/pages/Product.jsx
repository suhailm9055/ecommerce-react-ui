import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile, tablet } from "../Responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "25px 10px",
  })}
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    padding: "25px 10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 50%;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  ${mobile({ width: "80%" })}
  ${tablet({ flex: "80%" })}
`;
const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ width: "80%", textAlign: "center" })}
  ${tablet({ width: "80%", textAlign: "center" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ margin: "0" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%", margin: "10px 0px" })}
  ${tablet({ width: "100%", margin: "10px 0px" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  background-color: #a7a7a7b9;
  padding: 2% 3%;
border-radius: 30px;


`;
const FilterColor = styled.div`
      width: 45px;
    height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
`;
const FilterTitle = styled.span`
  font-size: 24px;
  font-weight: 200;
  margin-right:15%;
  ${mobile({ margin: "0px 10px" })}
`;
const FilterSize = styled.select`
          margin-right: 17px;
    width: 76px;
    font-size: 20px;
  background-color: #008080;
    
    /* border-radius: 15px; */
    &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
  ${mobile({ margin: "0px" })}
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a7a7a7b9;
padding: 2% 5%;
border-radius: 30px;
  ${mobile({ width: "90%", marginTop: "30px" })}
  ${tablet({ width: "90%", marginTop: "30px" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 5px 10px;

  font-size: 15px;
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
  &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 24px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
       setProduct(res.data);
       setColors(res.data.color);
       setSizes(res.data.size);
       setColor(res.data.color[0])
       setSize(res.data.size[0]);
      } catch (err) {}
    };
    getProduct();
  }, [id]);
  
  const handleQuantity=(type)=>{
    type==="dec"?quantity>1 && setQuantity(quantity-1):setQuantity(quantity+1);
  }
  
  const handleClick=()=>{
    
  }
  
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} QAR</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {colors?.map(color=>

              <FilterColor color={color} key={color} onClick={()=>setColor(color)}/>
              )}
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value.toLowerCase())}>
               {sizes?.map(size=>(

                <FilterSizeOption key={size}>{size.toUpperCase()} </FilterSizeOption>
               ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove cursor="pointer" onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add cursor="pointer" onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
