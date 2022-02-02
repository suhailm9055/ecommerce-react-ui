import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 550;
    font-size: 17px;
    `
const Announcements = () => {
  return <Container>
      Hurry! Free shipping over 200QR Ends Soon…
  </Container>;
};

export default Announcements;

