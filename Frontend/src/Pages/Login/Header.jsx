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
  min-width: 480px;
`;
const MainHeading = styled.h1`
  width: 80%;
  margin: auto;
  min-width: 480px;
  text-align: left;
  margin-bottom: 4rem;
  font-weight: 600;
`;
const DivB = styled.div`
  width: 36%;
  margin: auto;
  min-width: 480px;
`;
const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: grey;
`;
