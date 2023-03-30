import { Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";





export default class SimpleSlider extends Component {

  constructor() {
    super();
    this.state = {
        sliders:  [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1636156517000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1664581580690",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-3-202111?wid=364&hei=333&fmt=png-alpha&.v=1635187293000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-4-202111?wid=364&hei=333&fmt=png-alpha&.v=1665185957075",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-5-202111?wid=364&hei=333&fmt=png-alpha&.v=1635187292000"
        ]
    }
  }

  sliders() {
    return this.state.sliders.map(data => {
        return (
            <div key={data}>
                <img width={"100%"} height={"100%"} alt="image" src={data} />
            </div>
        )
    });
}

  
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{width:"100%",height:"80%"}} >
        <Slider {...settings}>
        {this.sliders()}
        </Slider>
      </div>
    );
  }
}