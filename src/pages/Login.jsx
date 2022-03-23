import React, { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";
import Navbar from "../components/Navbar";
// import googleLogin from "../components/google/Login";
// import GLogin from "../components/google/Login";
import { Googlelogin, login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
import { SafetyDivider } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from '../components/google/refreshToken';


const Button = styled.button`
  padding: ${(props) => (props.google ? "0" : "5px 15px")};
  padding-top: ${(props) => (props.google ? "0" : "7px")};
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
  ${mobile({ width: "120px" })};
  &:disabled {
    font-weight: 200;
    color: #ffffff65;
    cursor: progress;
    background: #008080be;
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 90.1vh;
  background: linear-gradient(to right, #adadad97, #2c2c2cd1),
    url("https://images.pexels.com/photos/5704412/pexels-photo-5704412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  display: flex;
  background-size: center;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background: linear-gradient(#fffdfdb7, #fffdfd3e);
  box-shadow: 0px 0px 15px 8px #423e3eab;
  border-radius: 10px;
  min-height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "80%" })}
  ${tablet({ width: "70%" })}
`;
const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  padding: 10px 0;
  ${mobile({ fontSize: "38px" })}
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Input = styled.input`
  font-size: 20px;
  min-width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
  border: none;
  box-shadow: 2px 2px 5px 1px #11111153;
  border-radius: 4px;
  ${mobile({ fontSize: "20px", width: "75%" })};
  &:hover,
  :focus {
    box-shadow: 0px 0px 5px 1px #06d6d6dc;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  cursor: ${(props) => props.isFetching && "progress"};
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Linkstyle = styled.a`
  width: 100%;

  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({ fontSize: "14px" })}
`;
const Error = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #bc0000;
  text-align: center;
`;
const Success = styled.p`
  font-size: 22px;
  color: green;
  text-align: center;
`;
const clientId =
  "638909240637-lj43pimncaemvl2eovmrnb2srcpii0e8.apps.googleusercontent.com";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const [validation, setValidation] = useState(null);

  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    if (username !== "") {
      if (password !== "") {
        if (username.length > 2) {
          if (password.length > 2) {
            await login(dispatch, { username, password });
            setValidation(null);
          } else {
            setValidation("Please do Check the password");
          }
        } else {
          setValidation("Please do Check the username");
        }
      } else {
        setValidation("Please do Check the password");
      }
    } else {
      setValidation("Please do Check the username");
    }
  };

  const sampleClick = async () => {
    await login(dispatch, { username: "admin2", password: "123456" });
  };
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    Googlelogin(dispatch,res.profileObj)
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };
  return (
    <>
      <Navbar user="notLoggedIn" />
      <Container>
        <Wrapper>
          {error && !validation && <Error>{error}</Error>}

          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {username === "" ? (
              <>
                {" "}
                {username === "" && <Error>Username must NOT be empty</Error>}
              </>
            ) : (
              <>
                {username?.length <= 2 && (
                  <Error>Username must be min of 3 characters</Error>
                )}
              </>
            )}
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password === "" ? (
              <>
                {password === "" && <Error>Password must NOT be empty</Error>}
              </>
            ) : (
              <>
                {" "}
                {password?.length <= 2 && (
                  <Error>Password must be min of 3 characters</Error>
                )}
              </>
            )}

            <ButtonContainer isFetching={isFetching}>
              <Button onClick={handleClick} disabled={isFetching}>
                LOG IN
              </Button>
            </ButtonContainer>
            <LinkContainer>
              <Link
                to="/register"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  fontSize: "20px",
                }}
              >
                CREATE A NEW ACCOUNT
              </Link>
              <Link
                onClick={sampleClick}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  fontSize: "20px",
                }}
              >
                Sample login
              </Link>
            </LinkContainer>
          </Form>
          <Divider />
          <h3 style={{ textAlign: "center", fontWeight: "300" }}>OR</h3>
          <div
            style={{ display: "flex", flexDirection: "column",alignItems: "center",margin: "auto" }}
          >
            <ButtonContainer>
              <Link
                to="/login/mobile"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  fontSize: "20px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "rgb(255,255,255)",
                    color: "#4d4d4de6",
                  }}
                >
                  Login with Mobile
                </Button>
              </Link>
            </ButtonContainer>
            <ButtonContainer isFetching={isFetching}>
              <Button
                google="true"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  color: "#4d4d4de6",
                  cursor: "pointer",
                }}
              >
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  style={{ marginTop: "100px",cursor: "pointer" ,opacity:"0.8"}}
                  isSignedIn={true}
                />
              </Button>
            </ButtonContainer>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
