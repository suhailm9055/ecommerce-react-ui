import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import { Add, Delete, Remove } from "@material-ui/icons";
import { mobile, tablet } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { Link, useHistory } from "react-router-dom";
import { deleteProduct } from "../redux/apiCalls";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2% 15%;
  ${mobile({ padding: "10px" })}
  ${tablet({ padding: "20px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "1px solid #006363" : "1px solid #616161dc"};
  background-color: ${(props) =>
    props.type === "filled" ? "#008080" : "#ffffff"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: ${(props) =>
      props.type === "filled" ? "#06d6d6dc" : "#ffffff"};
    color: #4d4d4de6;
    font-weight: bold;
    border: ${(props) =>
      props.type === "filled" ? "1px solid #006363" : "1px solid #06d6d6dc"};
  }
  ${mobile({ display: (props) => props.type === "filled" && "none" })}
`;
const TopTexts = styled.div`
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 35%;
  height: auto;
  ${mobile({ width: "50%" })}
`;
const Details = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #e7e7e7;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 18px;
  border-bottom: ${(props) =>
    props.borderDark === "true" ? "0.5px solid gray" : "0.5px solid lightgray"};
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "28px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const DeleteButton = styled.button``;
const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 5px 15px;
  padding-top: 7px;
  font-size: 17px;
  letter-spacing: 1px;
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
const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.delete ? "20px" : "0")};
  color: ${(props) => (props.delete ? "rgb(255, 20, 83,.5)" : "#4d4d4de6")};
  &:hover {
    transform: ${(props) => (props.delete ? "scale(1.1);" : "0")};
    color: ${(props) => (props.delete ? "rgb(255, 20, 83)" : "")};
    cursor: ${(props) => (props.delete ? "pointer" : "")};
    font-weight: bold;
    border-radius: 20%;
  }
`;
const ProductAmountStyle = {
  cursor: "pointer",
  hover: { transform: "scale(1.1);", color: "red" },
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  const KEY = process.env.REACT_APP_STRIPE;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
        console.log(res);
      } catch (err) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  console.log("user", user);
  // console.log("user.mobile.length",user?.mobile?.length);
  // console.log("user.address.lenth",user?.address?.length);
  // console.log("user.email",user.email);
  // console.log("user.username",user.username);
  function validateEmail($email) {
    console.log("tesst", $email);
    const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return emailReg.test($email);
  }
  const dispatch = useDispatch();
  const removeProduct = (product) => {
    deleteProduct(product, dispatch);
  };

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText> Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Link to={`/product/${product._id}`}>
                    <Image src={product.img} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Product:</b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <DeleteContainer>
                      <Add style={ProductAmountStyle} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove style={ProductAmountStyle} />
                    </DeleteContainer>
                    <DeleteContainer delete>
                      {/* <DeleteButton  >

                </DeleteButton> */}
                      <Delete onClick={() => removeProduct({ product })} />
                    </DeleteContainer>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} QR
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr></Hr>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} QR</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>25 QR</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem borderDark="true">
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-25 QR</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} QR</SummaryItemPrice>
            </SummaryItem>
            <>
          

            <ButtonContainer>
              
                {cart.quantity===0 ?
                <Link to="/">
                <Button>CONTINUE SHOPPING</Button>
              </Link> :
              <>
              
              {
              (  user?.mobile?.length === 10 &&
                user?.address &&
                validateEmail(user.email) &&
                user.username) ? (
                <StripeCheckout
                  name="eShop"
                  image="/ringLogo.png"
                  billingAddress
                  shippingAddress
                  description={`your total is ${cart.total} QA`}
                  amount={cart.total * 100}
                  currency="INR"
                  token={onToken}
                  stripeKey={KEY}
                  >
                  <Button>Checkout Now</Button>
                </StripeCheckout>
              )
               

              : 
              
              <>
              
              <Link
              to={{
                pathname: `/user/${user?._id}?check`,
              }}
              style={{ textDecoration: "inherit", color: "inherit" }}
              >
                  <Button>Checkout Now</Button>
                </Link>
              
              
                
              </>
              }
              </>
}
            </ButtonContainer>
            </>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
