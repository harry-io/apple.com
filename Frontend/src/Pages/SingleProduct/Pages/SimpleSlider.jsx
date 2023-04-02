import React from "react";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";



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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow/>,
  prevArrow: <SamplePrevArrow/>
};


function SimpleSlider({dtlimage}) {

  return(
    
    <Slider  {...settings} style={{ position: "relative", marginBottom:"2rem"}}>
          {dtlimage.length > 0 &&
            dtlimage.map((product) => (
              <div key={product}>
                 <img style={{width:"80%",margin:"auto"}} src={product}/>
              </div>
            ))}
      </Slider>
  );
}

export default SimpleSlider;


