import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderMain>
      <HeaderMainA>
        <ParaA>Shop Apple Watch</ParaA>
      </HeaderMainA>
      <HeaderMainB>
        <HeaderMainBa>
          <Image
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202211_AV2?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1671246216542"
            alt="help"
          />
          <Div>
            <Text>Need shopping help?</Text>
            <StyledLink to="#">Ask a Specialist</StyledLink>
          </Div>
        </HeaderMainBa>
        <HeaderMainBb>
          <svg
            viewBox="0 0 35 35"
            className="as-svgicon as-svgicon-applestore as-svgicon-base as-svgicon-applestorebase"
            role="img"
            aria-hidden="true"
            width="35px"
            height="35px"
          >
            <path fill="none" d="M0 0h35v35H0z"></path>
            <path d="M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z"></path>
            <path d="M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z"></path>
          </svg>
          <Div>
            <Text>Visit an Apple Store</Text>
            <StyledLink to="#">
              Find one near you{" "}
              <FiChevronRight style={{ marginBottom: "-3px" }} />
            </StyledLink>
          </Div>
        </HeaderMainBb>
      </HeaderMainB>
    </HeaderMain>
  );
};

export default Header;
// STYLED CSS
const HeaderMain = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;
const HeaderMainA = styled.div`
  width: 50%;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;
const ParaA = styled.h1`
  display: flex;
  align-items: center;
  color: black;
  font-size: 48px;
  display: inline;
  font-weight: 600;
  @media (max-width: 720px) {
    font-size: 35px;
  }
`;
const ParaB = styled.p`
  font-size: 48px;
  color: #6e6e73;
  display: inline;
  font-weight: 600;
`;
const HeaderMainB = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1124px) {
    display: none;
  }
`;
const HeaderMainBa = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const HeaderMainBb = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Image = styled.img`
  border-radius: 50%;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Text = styled.p`
  margin-top: -4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #06c;
  margin-top: -1rem;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
