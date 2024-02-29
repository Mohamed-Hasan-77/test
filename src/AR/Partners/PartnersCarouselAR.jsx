import "./PartARStyle.scss"
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


export default function PartnersCarouselAR() {
  return (
    <div className='PartnersAR '>


    <div className="secTitle text-center">
        <h2> <span className="under-linee" > شركاؤنا الرسميون </span> </h2>
    </div>


<div className="slider ">
	<div className="slide-track">
		<div className="slide">
			<img src={partnerImg1} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg2} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg3} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg4} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg5} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg6} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg7} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg8} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg9} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg10} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg11} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={partnerImg12} height="100" width="250" alt="" />
		</div>
	</div>
</div>


    </div>
  )
}
