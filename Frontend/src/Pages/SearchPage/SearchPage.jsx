import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { getProducts } from "../../Redux/Products/products.action";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
//

//
const SearchPage = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  useEffect(() => {
    query &&
      dispatch(
        getProducts(
          `https://back-ened-bolt.onrender.com/products/search?q=${query}`
        )
      );
  }, []);
  let { isLoading, isError, products } = useSelector(
    (store) => store.productsReducer
  );
  return (
    <ProductsMain>
      {/* HEADER */}
      <HeaderMainA>
        <ParaA>
          Search.
          <ParaB>We found it.</ParaB>
        </ParaA>
      </HeaderMainA>
      {/* PRODUCTS */}
      {isLoading && <Loader />}
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </ProductsMain>
  );
};

export default SearchPage;
// STYLED CSS
const ProductsMain = styled.div`
  width: 90%;
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
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
const ParaB = styled.p`
  font-size: 30px;
  color: #6e6e73;
  display: inline;
  font-weight: 600;
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
//
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearchPageMain = styled.div``;
