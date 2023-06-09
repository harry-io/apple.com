import React from "react";
import styled from "styled-components";

const AuthFooter = () => {
  return (
    <AuthFooterMain>
      <AuthFooterMainWrapper>
        {/*  */}
        <DivA>
          <p>Need some help?</p> <StyledLink href="#">Chat now</StyledLink>
          <p>or call 1-800-MY-BOLT.</p>
        </DivA>
        {/*  */}
        <DivB>
          <DivBa>
            The Apple Online Store uses industry-standard encryption to protect
            the confidentiality of the information you submit. Learn more about
            our Security Policy.
          </DivBa>
          <DivBb>
            <Div>Copyright © 2023 Apple Inc. All rights reserved.</Div>
            <Div>
              <p>Privacy Policy</p> <p>Terms of Use</p>
            </Div>
            <Div>
              <p>Privacy Policy</p> <p>Terms of Use</p>
            </Div>
            <Div>United States</Div>
          </DivBb>
        </DivB>
        {/*  */}
      </AuthFooterMainWrapper>
    </AuthFooterMain>
  );
};

export default AuthFooter;
// STYLED CSS
const AuthFooterMain = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 4rem 0 0 0;
`;
const AuthFooterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #e0e0e2;
`;
const DivA = styled.div`
  width: 80%;
  max-width: 1248px;
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  @media (max-width: 793px) {
    font-size: small;
    width: 90%;
  }
`;
const DivB = styled.div`
  width: 100%;
  margin: auto;
  background-color: #f5f5f7;
`;
const DivBa = styled.div`
  font-size: small;
  width: 80%;
  max-width: 1248px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  color: grey;
`;
const DivBb = styled.div`
  font-size: small;
  width: 80%;
  max-width: 1248px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  color: grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border-top: 1px solid #b5b4b4;

  @media (max-width: 793px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #007bff;
`;
