import { Facebook, Instagram, WhatsApp } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin:10px;
    
`
const Left = styled.div`
    
`
const Logo = styled.h1`
    
`
const SocialContainer = styled.div`
    
`
const SocialIcon = styled.div`
    
`
const Center = styled.div`
    
`
const Right = styled.div`
    
`
const SocialContainer1 = styled.div`
    
`


const Footer = () => {
  return(
<>

<Container>
<Left>
<Logo>deliveRing.qa</Logo>
<SocialContainer>
    <SocialIcon>
        <Facebook/>
    </SocialIcon>
    <SocialIcon>
        <Instagram/>
    </SocialIcon>
    <SocialIcon>
        <WhatsApp/>
    </SocialIcon>
</SocialContainer>
</Left>
<Center>

</Center>
<Right>

</Right>
</Container>

</>

  ) 
};

export default Footer;
