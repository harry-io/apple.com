import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
//
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
//

const WaysToSave = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <CarouselCategoryMain>
      <CarouselCategoryWrapper>
        <SlickCarousel {...settings} style={{ position: "relative" }}>
          {/*  */}
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-tradein-202302?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1677614394258"
              alt="Rihanna"
            />
            <Details>
              <Title>APPLE TRADE IN</Title>
              <TitleB>
                Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when
                you trade in iPhone 11 or higher.2
              </TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-carriertrade-202303?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1678213536139"
              alt="Rihanna"
            />
            <Details>
              <TitleB>Six Apple service. One easy subscription.</TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applecare-202301?wid=389&hei=405&fmt=p-jpg&qlt=95&.v=1672770914413"
              alt="Rihanna"
            />
            <Details>
              <TitleB>SPECIAL CARRIER DEALS AT APPLE</TitleB>
              <Title>
                Save up to $800 on the newest iPhone after trade-⁠in.1
              </Title>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-applecard-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1625761620000"
              alt="Rihanna"
            />
            <Details>
              <Title>APPLE CARD</Title>
              <TitleB>
                APPLE CARD Pay 0% APR over 24 months when you choose to check
                out with Apple Card Monthly Installments.3
              </TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-boxes-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1660852103701"
              alt="Rihanna"
            />
            <Details>
              <Title>IPHONE UPGRADE PROGRAM</Title>
              <TitleB>
                The easiest way to upgrade to the latest iPhone. Get the latest
                iPhone every year, low monthly payments, and AppleCare+.4
              </TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-refurb-202202?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1643155828000"
              alt="Rihanna"
            />
            <Details>
              <Title>CERTIFIED REFURBISHED</Title>
              <TitleB>
                Shop refurbished Apple products backed by a one‑year warranty.
              </TitleB>
            </Details>
          </Div>

          {/*  */}
        </SlickCarousel>
      </CarouselCategoryWrapper>
    </CarouselCategoryMain>
  );
};

export default WaysToSave;
// Styled css
const CarouselCategoryMain = styled.div`
  padding: 10px 0;
  background-color: #ffffff;
`;
const CarouselCategoryWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
`;
const SlickCarousel = styled(Slider)``;
const Div = styled.div`
  padding: 1rem;
  position: relative;
  transition: 0.6s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
const Image = styled.img`
  width: 90%;
  margin: auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;
const Details = styled.div`
  position: absolute;
  top: 35px;
  left: 90px;
  @media (max-width: 768px) {
    top: 20px;
    left: 50px;
  }
`;
const Title = styled.p`
  width: 80%;
  text-align: justify;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: -15px;
  color: #605f5f;
  @media (max-width: 768px) {
    font-size: medium;
  }
  @media (max-width: 480px) {
    font-size: small;
  }
`;
const TitleB = styled.p`
  text-align: justify;
  width: 70%;
  margin-bottom: -0.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: medium;
  }
  @media (max-width: 480px) {
    font-size: small;
  }
`;
