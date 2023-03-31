import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/products.action";
import Loader from "../../Components/Loader/Loader";
//

//
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("https://back-ened-bolt.onrender.com/products"));
  }, []);
  let { isLoading, isError, products } = useSelector(
    (store) => store.productsReducer
  );
  console.log(products);
  return (
    <ProductsMain>
      {/* HEADER */}
      <HeaderMainA>
        <ParaA>
          Products.
          <ParaB> Take a look at what’s new, right now.</ParaB>
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

export default Products;
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
