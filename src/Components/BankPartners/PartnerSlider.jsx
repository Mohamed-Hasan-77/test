import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./PartnersStyle.scss"


import partnerImg1 from "../../assets/sliderImages/colored-afz-partner.svg"
import partnerImg2 from "../../assets/sliderImages/colored-dafza-partner.svg"
import partnerImg3 from "../../assets/sliderImages/colored-ded.png"
import partnerImg4 from "../../assets/sliderImages/colored-dmcc-partner.svg"
import partnerImg5 from "../../assets/sliderImages/colored-hamriyah-partner.svg"
import partnerImg6 from "../../assets/sliderImages/colored-jafza.svg"
import partnerImg7 from "../../assets/sliderImages/colored-khalifa-industrial-zone-abu-dhabi-kizad-partner.svg"
import partnerImg8 from "../../assets/sliderImages/colored-rak-partner.svg"
import partnerImg9 from "../../assets/sliderImages/colored-saif-zone-partner.png"
import partnerImg10 from "../../assets/sliderImages/colored-shams-partner.svg"
import partnerImg11 from "../../assets/sliderImages/colored-spcfz-partner.svg"
import partnerImg12 from "../../assets/sliderImages/ifza-colored.png"

function PartnerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

<div className="img w-20">
    <img src={partnerImg1} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg2} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg3} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg4} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg5} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg6} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg7} alt="partnerImg" />
</div>


<div className="img w-20">
    <img src={partnerImg8} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg9} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg10} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg11} alt="partnerImg" />
</div>

<div className="img w-20">
    <img src={partnerImg12} alt="partnerImg" />
</div>

      </Slider>
    </div>
  );
}

export default PartnerSlider;