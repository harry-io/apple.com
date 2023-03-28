import "../../Styles/Home.css";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  var video = document.getElementById("video");

  useEffect(() => {
    let id = setInterval(function () {
      video.currentTime = window.pageYOffset / 800;
    }, 120);
  }, []);


  return (
    <>
      <div className="homeMain">
        {/*  */}
        <div className="homeImgBx">
          <div className="text">
            <h1>iPhone 14 Pro</h1>
            <h3>Pro. Beyond.</h3>
          </div>
          <video
            id="video"
            src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large_2x.mp4"
          />
        </div>
        {/*  */}
        <div className="homeItemBx">
          <div className="itemText">
            <h1>iPhone 14</h1>
            <h3>Two great sizes.</h3>
            <h3>Now with a splash of yellow.</h3>
          </div>
          <div className="itemImg">
            <img
              src="https://pbs.twimg.com/card_img/1638643083603775488/Gb0Kvpvp?format=jpg&name=900x900"
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="homeItemBx">
          <div className="itemText">
            <h1>
              {" "}
              <i className="fa fa-apple"></i> WATCH
            </h1>
            <h3>SERIES 8</h3>
            <h3>A healthy leap ahead.</h3>
          </div>
          <div className="itemImg">
            <img
              src="https://9to5toys.com/wp-content/uploads/sites/5/2022/10/apple-watch-series-8-cellular-sale.jpg?resize=1536,768"
              alt=""
            />
          </div>
        </div>
        {/*  */}

        <div className="homeGrid">
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/1/WJ/AX/QW/18726985/ipad-500x500.jpeg"
              alt=""
            />
          </div>
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://ioshacker.com/wp-content/uploads/2023/01/MacBook-Pro-2023-1024x598.jpg"
              alt=""
            />
          </div>
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://www.apple.com/newsroom/images/product/homepod/standard/Apple-HomePod-hero-230118_big.jpg.large.jpg"
              alt=""
            />
          </div>
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/25/full/1664130285-7306.png"
              alt=""
            />
          </div>
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://images.idgesg.net/images/article/2020/06/iphone-11-100849276-large.jpg?auto=webp&quality=85,70"
              alt=""
            />
          </div>
          {/*  */}
          <div className="homeGridBx">
            <div className="gridText">
              <h1>iPad</h1>
              <h3>Lovable. Drawable. Magical.</h3>
            </div>
            <img
              src="https://thefederal.com/file/2022/10/Apple-credit-card.jpg"
              alt=""
            />
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default Home;
