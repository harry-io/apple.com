import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/products.action";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Card from "./Card";
//
//
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        zIndex: 4,
        backgroundColor: "#ffffff62",
        color: "black",
        cursor: "pointer",
        right: 0,
        top: "43%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronRight
        style={{ color: "#6e6e739b", fontSize: "1.8rem" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        zIndex: 4,
        backgroundColor: "#ffffff62",
        cursor: "pointer",
        left: 0,
        top: "43%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft
        style={{ color: "#6e6e739b", fontSize: "1.5rem" }}
      />
    </div>
  );
}
//
//
const Watch = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, products } = useSelector(
    (store) => store.productsReducer
  );
  //
  //
  useEffect(() => {
    dispatch(
      getProducts(
        "https://back-ened-bolt.onrender.com/products?category=apple watch"
      )
    );
  }, []);
  //
  //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //
  //
  return (
    <ProductMain>
      <Header />
      {/*  */}
      <CarouselWrapper>
        <SlickCarousel {...settings} style={{ position: "relative" }}>
          {products.length > 0 &&
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </SlickCarousel>
      </CarouselWrapper>
    </ProductMain>
  );
};

export default Watch;
// STYLED CSS
const CarouselWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
`;
const SlickCarousel = styled(Slider)``;
const ProductMain = styled.div``;
