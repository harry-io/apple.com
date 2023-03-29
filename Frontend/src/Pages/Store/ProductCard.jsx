import React from "react";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  return (
    <ProductCardMain>
      <Image src={product.image} alt={product.title} />
      <DetailsContainer>
        <Title>{product.title}</Title>
        <Comment>{product.comment}</Comment>
        <Price>{product.price}</Price>
      </DetailsContainer>
    </ProductCardMain>
  );
};

export default ProductCard;
// STYLED CSS
const ProductCardMain = styled.div`
  position: relative;
  border-radius: 15px;
  transition: 0.6s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;
const DetailsContainer = styled.div`
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  top: 8px;
  left: 16px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #ffffff6a;
`;
const Title = styled.p`
  width: 90%;
  margin: auto;
  font-size: xx-small;
`;

const Comment = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.7rem;
  font-weight: 600;
`;
const Price = styled.p`
  width: 90%;
  margin: auto;
  font-size: small;
`;
