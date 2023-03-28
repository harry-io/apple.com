import "../../Styles/Home.css";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
            ref={videoRef}
            controls
            src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large_2x.mp4"
          />
        </div>

        {/*  */}
        <div className="homeImgBx">
          <div className="text">
            <h1>iPhone 14</h1>
            <h3>Two great sizes.</h3>
            <h3>Now with a splash of yellow.</h3>
          </div>
          <img
            src="https://pbs.twimg.com/card_img/1638643083603775488/Gb0Kvpvp?format=jpg&name=900x900"
            alt=""
          />
        </div>
        {/*  */}
        <div className="homeImgBx">
          <div className="text">
            <h1>iPhone 14</h1>
            <h3>Two great sizes.</h3>
            <h3>Now with a splash of yellow.</h3>
          </div>
          <img
            src="https://9to5toys.com/wp-content/uploads/sites/5/2022/10/apple-watch-series-8-cellular-sale.jpg?resize=1536,768"
            alt=""
          />
        </div>
        {/*  */}
      </div>
      <button onClick={handlePlayPause}>{isPlaying ? "Play" : "Pause"}</button>
    </>
  );
};
export default Home;
