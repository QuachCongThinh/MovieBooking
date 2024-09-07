import React from "react";
import Slider from "react-slick";
import Slide1 from "../../assets/lam-giau-voi-ma.jpg";
import Slide2 from "../../assets/beetlejuice-beetlejuice-ma-sieu-quay.jpg";
import Slide3 from "../../assets/banner_mai.png";
import Slide4 from "../../assets/Minion.jpg";

const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <img src={Slide1} alt="Slider1" />
        <img src={Slide2} alt="Slider2" />
        <img src={Slide3} alt="Slider3" />
        <img src={Slide4} alt="Slider4" />
      </Slider>
    </div>
  );
};
export default Banner;
