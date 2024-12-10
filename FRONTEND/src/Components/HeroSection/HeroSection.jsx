import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="my-10">
    <Slider {...settings}>
      <div className="bg-red-300 border-6 border-black">
        <img className="w-[95%] rounded-lg h-72 object-cover object-center " src="https://giftcart.com/cdn/shop/files/Uniquely_yours_Mobile_Size_Banner.webp?v=1686218661&width=3000" alt="" />
        </div>
        <div>
        <img className="w-[95%] rounded-lg h-72 object-cover " src="https://giftcart.com/cdn/shop/files/Mobile_Christmas_Banner.webp?v=1670324436&width=1200" alt="" />
        </div>
        <div>
        <img className="w-[95%] rounded-lg h-72 object-cover " src="https://giftcart.com/cdn/shop/files/Uniquely_yours_Mobile_Size_Banner.webp?v=1686218661&width=3000" alt="" />
        </div>
        <div>
        <img className="w-[95%] rounded-lg h-72 object-cover " src="https://giftcart.com/cdn/shop/files/Uniquely_yours_Mobile_Size_Banner.webp?v=1686218661&width=3000" alt="" />
=        </div>
    </Slider>
    </div>
  );
};

export default HeroSection;
