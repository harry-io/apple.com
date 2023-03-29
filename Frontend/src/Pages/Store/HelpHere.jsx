import React from "react";
import styled from "styled-components";

const HelpHere = () => {
  return (
    <HelpHereMain>
      {/* HEADER */}
      <HeaderMainA>
        <ParaA>
          Help is here.
          <ParaB> Whenever and however you need it.</ParaB>
        </ParaA>
      </HeaderMainA>
      {/*  */}
      <HelpHereDiv>
        <HelpHereDivA>
          <Image
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202211?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1674262573026"
            alt="help"
          />
          <DetailsContainer>
            <Title>APPLE SPECIALIST</Title>
            <Comment>
              Shop one on one with a Specialist. Online or in a store.
            </Comment>
          </DetailsContainer>
        </HelpHereDivA>
        <HelpHereDivB>
          <HelpHereDivBA>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000"
              alit="a"
            />
            <Details>
              <TitleB>
                Get to know your new device with a free Personal Session.
              </TitleB>
            </Details>
          </HelpHereDivBA>
          <HelpHereDivBB>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000"
              alit="b"
            />

            <DetailsB>
              <TitleB>Get expert service and support at the Genius Bar.</TitleB>
            </DetailsB>
          </HelpHereDivBB>
        </HelpHereDivB>
      </HelpHereDiv>
    </HelpHereMain>
  );
};

export default HelpHere;
// STYLED CSS
const HelpHereMain = styled.div`
  width: 70%;
  margin: auto;
  max-width: 1248px;
  margin-top: 2.5rem;
`;
const HeaderMainA = styled.div`
  width: 100%;
  display: flex;
`;
const ParaA = styled.h1`
  display: flex;
  align-items: center;
  color: black;
  font-size: 30px;
  display: inline;
  font-weight: 600;
`;
const ParaB = styled.p`
  font-size: 30px;
  color: #6e6e73;
  display: inline;
  font-weight: 600;
`;
//
const HelpHereDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;
const HelpHereDivA = styled.div`
  position: relative;
`;
const DetailsContainer = styled.div`
  width: 90%;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  top: 8px;
  left: 16px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
const Title = styled.p`
  width: 90%;
  margin: auto;
  font-size: small;
  margin-top: 1rem;
  color: #5e5c5c;
`;

const Comment = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.7rem;
  font-weight: 600;
`;
//
const HelpHereDivB = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
`;
const HelpHereDivBA = styled.div`
  position: relative;
`;
const HelpHereDivBB = styled.div`
  position: relative;
`;
const Details = styled.div`
  width: 90%;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  top: 15%;
  left: 16px;
`;
const DetailsB = styled.div`
  width: 60%;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  top: 30%;
  left: 16px;
`;
const TitleB = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.7rem;
  font-weight: 600;
`;
