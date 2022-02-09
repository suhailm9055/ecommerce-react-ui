import styled from "styled-components"

const Container=styled.div`
`
const Wrapper=styled.div`
`
const Title=styled.h1`
`
const Form=styled.form`
`
const Input=styled.input`
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
                By Creating an account, I consent to the processing of my personal data in accordance with the <br> PRIVACY POLICY</br>
            </Agreement>
           <Button>Create Account <Button/>
        </Form>
        </Wrapper>


    </Container>
  )
}

export default Register