import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderMain>
      <MainHeading>Sign in for faster checkout.</MainHeading>
      <DivB>
        <Heading>Sign in to Bolt Store</Heading>
      </DivB>
    </HeaderMain>
  );
};

export default Header;
const HeaderMain = styled.div`
  width: 90%;
  margin: auto;
`;
const MainHeading = styled.h1`
  width: 80%;
  margin: auto;
  text-align: left;
  margin-bottom: 4rem;
  font-weight: 600;
  @media (max-width: 793px) {
    width: 100%;
    font-size: 24px;
  }
`;
const DivB = styled.div`
  width: 36%;
  margin: auto;
  @media (max-width: 793px) {
    width: 100%;
  }
`;
const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: grey;
  @media (max-width: 793px) {
    width: 100%;
    font-size: 18px;
  }
`;
