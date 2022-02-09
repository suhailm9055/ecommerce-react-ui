import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 50%;
  background: #e0e0de;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:0px 50px;
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin:20px 0px;`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const FilterContainer= styled.div`
width:50%;
margin:30px 0px;
  display:flex;
  justify-content:space-between;
`
const Filter= styled.div`
  display:flex;
  align-items:center;
`
const FilterColor= styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color};
  margin:0px 5px;
`
const FilterTitle= styled.span`
  font-size:20px;
  font-weight:200;
`
const FilterSize= styled.select`
  margin:0px 10px;

`
const FilterSizeOption= styled.option`
  
`
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Button=styled.button`
`
const Amount=styled.span`
`

const Product = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src="/images/etegi-lastikli-tesettur-kap-tsd0080-indigo-93286-12-B.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Skirt Elastic Hijab Women-Jackets</Title>
          <Desc>New Season skirt Elastic Hijab Women-Jackets  model is. Front button with closes. The product color may be toned due to the Lighting in place.</Desc>
          <Price>200 QR</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="Blue"/>
              <FilterColor color="Red"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
