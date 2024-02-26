import ServBox from "./ServBox/ServBox"
import "./servicesStyle.scss"

import img1 from "../../assets/company-formation-and-trade-license.svg"
import img2 from "../../assets/visa-immigration-services.svg"
import img3 from "../../assets/ico-no-corporate-tax.svg"
import img4 from "../../assets/corporate-bank-account-access.svg"
import img5 from "../../assets/vip-emirates-id-and-medical-services.svg"
import img6 from "../../assets/no-local-employee-quota.svg"



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function Services() {

    let boxesData = [ 
        {   
            img : img1,
            boxTitle: "Company Formation and Trade License",
            description: `We're experts at helping you start a company in the UAE, whether it's on the mainland, in a free zone, or offshore. We'll walk you through everything, from picking the best type of business to getting all the licenses and permits you need.`
        },
        {   
            img : img2,
            boxTitle: "Visa & Immigration Services",
            description: `Smart Zones <sup class="font-2 fw-light">®</sup>  UAE offer Assistance with the application process for the UAE Golden Visa, which is a long-term residency program for investors, entrepreneurs, and high-net-worth individuals.`
        },
        {   
            img : img3,
            boxTitle: "VAT & Corporate Tax Consultancy",
            description: `Smart Zones <sup class="font-2 fw-light">®</sup>  UAE offers comprehensive VAT and Corporate Tax consultancy services in the Dubai. We provide expert advice and guidance to businesses navigating the complex tax landscape.`
        },
        {   
            img : img4,
            boxTitle: "Bank Account Opening Assistant",
            description: ` Dubai takes pride in offering VIP services for obtaining Emirates ID and Medical cards, expediting the application process. Our dedicated team ensures a seamless experience, minimizing the time and effort required to acquire these essential documents.`
        },
        {   
            img : img5,
            boxTitle: "VIP Emirates ID & Medical Services",
            description: ` Dubai takes pride in offering VIP services for obtaining Emirates ID and Medical cards, expediting the application process. Our dedicated team ensures a seamless experience, minimizing the time and effort required to acquire these essential documents.`
        },
        {   
            img : img6,
            boxTitle: "Concierge / PRO Services",
            description: `Our Concierge / PRO Services services team handles all government-related tasks, like renewals, documents clearance & authentication, registering for a PO Box and Driver's License transfers. This way, you can concentrate on growing your business without worrying about these legal processes.`
        }
    
    ]


    return (
    <div className="services">

        <div className="container">
            <h2>
                <span className="under-line"> Our </span> Comprehensive 
                <span className="text-mainColor"> Business Setup Services </span>
            </h2>


            <div className="sevBoxes flex justify-between flex-wrap">


                {boxesData.map((data, idx) => {
                    return <ServBox key={idx} theImg={data.img} theTitle={data.boxTitle} description={data.description}   />
                } )}

                


            </div>


            <div className="btn text-center">
                <button className="px-7 py-2.5 rounded-full bg-mainLinearColor text-xl mt-12 "> 
                    <a href=""> Contact Us </a>
                </button>
            </div>


        </div>
    </div>
    )
}
