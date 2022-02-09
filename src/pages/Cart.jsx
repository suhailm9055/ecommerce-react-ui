import React from 'react'
import styled from 'styled-components'
import  Navbar  from '../components/Navbar'
import  Announcements  from '../components/Announcements'
import  Footer  from '../components/Footer'
const Container=styled.div`
  
`

const Cart = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/> 
      <Wrapper>
        

      </Wrapper>
      <Footer/>
         </Container>
  )
}

export default Cart