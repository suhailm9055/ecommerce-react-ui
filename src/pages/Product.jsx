import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({flexDirection:"column" ,alignItems:'center',padding:"25px 10px"})}
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 50%;
  background: #e0e0de;
  overflow: hidden;
  display: flex;
  justify-content: center;
  ${mobile({width:"80%"})}
`;
const Img = styled.img`
  width: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:0px 50px;
  ${mobile({width:"80%",textAlign:"center"})}
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin:20px 0px;
${mobile({margin:"0"})}
`;
const Price = styled.span`
font-weight:100;
font-size:40px;

`;

const FilterContainer= styled.div`
width:50%;
margin:30px 0px;
  display:flex;
  justify-content:space-between;
  ${mobile({width:'100%',margin:'10px 0px'})}
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
  ${mobile({margin:'0px 10px'})}
`
const FilterSize= styled.select`
  margin:0px 10px;
  ${mobile({margin:'0px'})}
  
`
const FilterSizeOption= styled.option`
  
`
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:'100%',marginTop:'30px'})}
`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Button=styled.button`
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
  &:hover{
    transform:scale(1.1) ;
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
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
