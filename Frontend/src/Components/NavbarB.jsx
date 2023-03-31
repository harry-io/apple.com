import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavbarB = () => {
  const navigate = useNavigate();
  return (
    <NavbarBmain>
      <NavbarBmainWrappper>
        <LogoContainer>
          <Logo
            src="https://i.ibb.co/fCgpc03/bolt.png"
            alt="bolt_logo"
            onClick={() => navigate("/")}
          />
        </LogoContainer>
        <Options>
          <StyledLink href="/login">Sign in</StyledLink>
          <StyledLink href="/signup">Create Your Bolt Ac.</StyledLink>
        </Options>
      </NavbarBmainWrappper>
    </NavbarBmain>
  );
};

export default NavbarB;
// STYLED CSS
const NavbarBmain = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  top: 0;
  z-index: 99;
`;
const NavbarBmainWrappper = styled.div`
  width: 90%;
  max-width: 1248px;
  margin: auto;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 10%;
`;
const Logo = styled.img`
  width: 20%;
  cursor: pointer;
  @media (max-width: 893px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: grey;
  font-size: small;
  &:hover {
    color: #007bff;
  }
  &:focus {
    color: red;
  }
`;
