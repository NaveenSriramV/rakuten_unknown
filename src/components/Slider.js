import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider autoplay {...settings} style={{width:'90%',marginTop:-10 ,margin:30, padding:30,marginLeft:'auto',marginRight:'auto'}}>
      <div >
      <img alt="" src="https://miro.medium.com/max/3200/1*PNg6D9dSHR2kKNW4nNBKnA.jpeg"/>
      </div>
      <div>
      <img alt="" src="https://www.datto.com/img/blog-hero-images/_1600x400_crop_center-center_100_line/1714932/business-management-rmm-1600.jpg"/>
      </div>
      <div>
      <img alt="" src="https://www.datto.com/img/blog-hero-images/_1600x400_crop_center-center_100_line/1805464/1600x400-RMM-Video.jpg"/>
      </div>
      <div>
      <img alt="" src="http://www.datto.com/img/blog-hero-images/_1600x400_crop_center-center_100_line/1713594/1600x400-Marketnow.jpg"/>
      </div>
      <div>
      <img alt="" src="https://www.opentext.com/file_source/OpenText/en_US/JPG/opentext-1600x400-wem-promo-ceo-wp.JPG"/>
      </div>
      
    </Slider>
  );
}
