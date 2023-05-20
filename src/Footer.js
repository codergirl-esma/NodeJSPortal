import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div `
  position : flex;
  display : flex;
  bottom : 0;
  left :0;
  width : 100%;
  justify-content : center;
  color : black;
  font-size : 20px;
  padding-top :10px;
`;


export const Footer = () => {
  return (
    <>
    <StyledFooter>
    <footer >
    <p >&copy; 2023 Erasmus, Tc</p>
    </footer>
    </StyledFooter>
   
    </>
  )
}
