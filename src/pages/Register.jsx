import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #adadad97, #2c2c2cd1),
    url("https://images.pexels.com/photos/5242808/pexels-photo-5242808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      no-repeat;
  display: flex;
  background-size:cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background: linear-gradient(#fffdfdb7, #fffdfd3e);
  box-shadow: 0px 0px 15px 8px #423e3eab;
  border-radius: 10px;
  min-height: 50%;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align:center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  font-size: 20px;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
  border: none;
  box-shadow: 2px 2px 5px 1px #11111153;
  border-radius: 4px;
`;
const Agreement = styled.div`
  font-size: 15px;
  margin: 10px 0px;
`;

const ButtonContainer = styled.div`
width:100%;
    display:flex;
align-items:center;
  justify-content:center;
`;
const Button = styled.button`
  padding: 5px 15px;
  padding-top: 7px;
  font-size: 20px;
  letter-spacing: 1px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`
;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b> PRIVACY POLICY</b>
          </Agreement>

          <ButtonContainer>
            <Button>CREATE ACCOUNT</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register
