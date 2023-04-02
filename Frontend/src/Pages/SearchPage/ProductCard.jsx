import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Div>
      <DivB>
        <DetailsA>
          <Title>{product.title}</Title>
        </DetailsA>
        <Image src={product.image} alt="Rihanna" />
        <DetailsB>
          <TitleB>{product.price}</TitleB>
          <Button onClick={() => navigate(`products/${product._id}`)}>
            Buy
          </Button>
        </DetailsB>
      </DivB>
    </Div>
  );
};

export default ProductCard;
const Div = styled.div`
  padding: 3rem 0;
`;
const DivB = styled.div`
  width: 80%;
  height: 420px;
  margin: auto;
  padding: 1rem;
  transition: 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    height: 500px;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const DetailsA = styled.div``;
const Title = styled.h2`
  font-weight: 600;
`;
const DetailsB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Button = styled.button`
  border: none;
  background: #0071e3;
  color: #fff;
  padding: 8px 20px;
  border-radius: 780px;
  cursor: pointer;
  font-size: 17px;
`;
const TitleB = styled.p`
  font-size: small;
`;
