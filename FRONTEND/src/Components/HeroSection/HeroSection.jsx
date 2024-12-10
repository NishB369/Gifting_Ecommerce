import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 200,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    cssEase:'linear'
  };
  return (
    <div className="my-10 w-full">
      <Slider {...settings}>
        <div>
          <img
            className="w-[100%] h-96 object-cover object-center flex items-center justify-center p-4 rounded-3xl"
            src="/car01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[100%] h-96 object-cover object-center flex items-center justify-center p-4 rounded-3xl"
            src="/car02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[100%] h-96 object-cover object-center flex items-center justify-center p-4 rounded-3xl"
            src="/car03.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[100%] h-96 object-cover object-center flex items-center justify-center p-4 rounded-3xl"
            src="/car04.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
