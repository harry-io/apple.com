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

const AppleExperience = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1195,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
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
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applemusic-202303?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1677003263514"
              alt="Rihanna"
            />
            <Details>
              <Title style={{ color: "white" }}>APPLE MUSIC</Title>
              <TitleB style={{ color: "white" }}>
                Rihanna's iconic hits now in Spatial Audio. ^
              </TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375546000"
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
              <TitleB>We have got you covered.</TitleB>
              <Title>
                AppleCare+ now comes with unlimited repairs for accidential
                damage protection.
              </Title>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1677655420359"
              alt="Rihanna"
            />
            <Details>
              <Title>Mac</Title>
              <TitleB>Rihanna's iconic hits now in Spatial Audio. ^</TitleB>
            </Details>
          </Div>
          <Div>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202301?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1670880984728"
              alt="Rihanna"
            />
            <Details>
              <Title>Mac</Title>
              <TitleB>Rihanna's iconic hits now in Spatial Audio. ^</TitleB>
            </Details>
          </Div>

          {/*  */}
        </SlickCarousel>
      </CarouselCategoryWrapper>
    </CarouselCategoryMain>
  );
};

export default AppleExperience;
// Styled css
const CarouselCategoryMain = styled.div`
  margin-top: 4.5rem;
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
  top: 18px;
  left: 55px;
`;
const Title = styled.p`
  width: 80%;
  text-align: justify;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: -15px;
  color: #605f5f;
`;
const TitleB = styled.p`
  text-align: justify;
  width: 70%;
  margin-bottom: -0.8rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
