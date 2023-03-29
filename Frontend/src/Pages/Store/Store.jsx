import React from "react";
import styled from "styled-components";
import AppleExperience from "./AppleExperience";
import CarouselCategory from "./CarouselCategory";
import Header from "./Header";
import HelpHere from "./HelpHere";
import Products from "./Products";

const Store = () => {
  return (
    <StoreMain>
      <Header />
      <CarouselCategory />
      <Products />
      {/*  */}
      <HelpHere />
      {/*  */}
      <AppleExperience />
    </StoreMain>
  );
};

export default Store;
// STYLED CSS
const StoreMain = styled.div``;
