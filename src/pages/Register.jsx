import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(to left,#ffffffe2,#ffffff37), url("https://images.pexels.com/photos/5242808/pexels-photo-5242808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")no-repeat ;

background-blend-mode: lighten;`
const Wrapper=styled.div`
`
const Title=styled.h1`
`
const Form=styled.form`
`
const Input=styled.input`
`
const Agreement=styled.div`
`
const Button=styled.button`
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
            <Agreement>
                By Creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY</b>
            </Agreement>
           <Button>Create Account </Button>
        </Form>
        </Wrapper>


    </Container>
  )
}

export default Register