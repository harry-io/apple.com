import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
//
let products = [
  {
    id: 1,
    title: "IPHONE 14",
    comment: "Wonderful",
    price:
      "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558944069",
  },
  {
    id: 2,
    title: "IPHONE 14",
    comment: "Wonderful",
    price:
      "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545",
  },
  {
    id: 3,
    title: "IPHONE 14",
    comment: "Wonderful",
    price:
      "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558944069",
  },
  {
    id: 4,
    title: "IPHONE 14",
    comment: "Wonderful",
    price:
      "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558944069",
  },
  {
    id: 5,
    title: "IPHONE 14",
    comment: "Wonderful",
    price:
      "From $799 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558944069",
  },
];
//
const Products = () => {
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
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
`;
const ParaB = styled.p`
  font-size: 30px;
  color: #6e6e73;
  display: inline;
  font-weight: 600;
`;
//
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;
