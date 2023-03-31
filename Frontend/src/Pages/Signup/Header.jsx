import React from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
const Header = () => {
  return (
    <HeaderMain>
      <DivA>
        <Heading>Create your Bolt Account</Heading>
        <SubHeading>
          One Bolt Account is all you need to access all Apple services. Already
          have an Bolt account?{" "}
          <StyledLink href="/login">
            Login in here <FiChevronRight style={{ marginBottom: "-4px" }} />
          </StyledLink>
        </SubHeading>
      </DivA>
    </HeaderMain>
  );
};

export default Header;
const HeaderMain = styled.div`
  width: 36%;
  margin: auto;
  @media (max-width: 793px) {
    width: 90%;
  }
`;
const DivA = styled.div``;
const Heading = styled.h1`
  font-weight: 650;
  @media (max-width: 793px) {
    font-size: large;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;
const SubHeading = styled.p`
  font-size: 18px;
  color: #000000;
  margin-top: -15px;
  @media (max-width: 793px) {
    font-size: 15px;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #0070c9;
`;
