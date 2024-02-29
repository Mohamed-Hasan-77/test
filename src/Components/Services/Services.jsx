import ServBox from "./ServBox/ServBox"
import "./servicesStyle.scss"

import img1 from "../../assets/company-formation-and-trade-license.svg"
import img2 from "../../assets/visa-immigration-services.svg"
import img3 from "../../assets/ico-no-corporate-tax.svg"
import img4 from "../../assets/corporate-bank-account-access.svg"
import img5 from "../../assets/vip-emirates-id-and-medical-services.svg"
import img6 from "../../assets/no-local-employee-quota.svg"
import { useState } from "react"


import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/smart-zones-uae-business-setup-logo.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function Services() {

    const [requestCallBack, setRequestCallBack] = useState(false);


    let boxesData = [ 
        {   
            img : img1,
            boxTitle: "Company Formation and Trade License",
            description: `We're experts at helping you start a company in the UAE, whether it's on the mainland, in a free zone, or offshore. We'll walk you through everything, from picking the best type of business to getting all the licenses and permits you need.`
        },
        {   
            img : img2,
            boxTitle: "Visa & Immigration Services",
            description: `Smarketing ®  UAE offer Assistance with the application process for the UAE Golden Visa, which is a long-term residency program for investors, entrepreneurs, and high-net-worth individuals.`
        },
        {   
            img : img3,
            boxTitle: "VAT & Corporate Tax Consultancy",
            description: `Smarketing ®  UAE offers comprehensive VAT and Corporate Tax consultancy services in the Dubai. We provide expert advice and guidance to businesses navigating the complex tax landscape.`
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




    return <>
    
    
    <div className="services">

        <div className="container">
                <h2>
                    <span className="under-line"> Our </span> Comprehensive 
                    <span className="textMainColor"> Business Setup Services </span>
                </h2>


                <div className="sevBoxes flex justify-between flex-wrap">


                    {boxesData.map((data, idx) => {
                        return <ServBox key={idx} theImg={data.img} theTitle={data.boxTitle} description={data.description}   />
                    } )}

                    


                </div>


                <div className="btn text-center">
                    <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-white text-xl mt-12 "> 
                        Contact Us 
                    </button>
                </div>


        </div>
    </div>
    
    
    
    <div className={`requestCallback   ${requestCallBack == false ? "invisible opacity-0 hidden "  :  "visible opacity-1 flex"  } `}>

<div className={`requestBox  `}>

<img onClick={()=> setRequestCallBack(!requestCallBack)} src={XphoneImg} width={16} className='closeRequest' alt="XImg"  />

    <form>
        <div className="flex flex-wrap  ">
            <div className="w-full ">

                <div className="title text-white">

                  <div className="logo flex justify-center mb-3">
                    <img  src={logoImg} className='w-24'  alt="logo"/>
                  </div>
                  <p className="  text-xl w-full text-center">We offer licences that support </p>
                  <p className="  text-xl w-full text-center"> your business in UAE </p>
                  <p className="my-5  text-xl w-full text-center"> Get a Call-Back in 50 seconds </p>
                </div>

                <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium  ">Your name (required) </label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
            </div>

            <div className="w-full mt-5">
                <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium  ">Your Phone Number (required)</label>
                {/* <input type="tel" id="phone"  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /> */}
                <PhoneInput country={'eg'} inputProps={{  required: true,  }} className="bg-gray-50   text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-1  "/>
            </div>

            <div className="w-full mt-5">
                <label htmlFor="email" className="block mb-2 text-white text-sm font-medium  ">Your email address </label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
            </div>  

            <div className="w-full mt-5">
                <label htmlFor="website" className="block mb-2 text-white text-sm font-medium  "> Message (Optional)</label>
                <input type="url" id="website" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "   />
            </div>

            <button type="submit" className="text-white bg-green-700 hover:bg-black transition-colors w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl"> Call Me !</button>

        </div>

    </form>

</div>

</div>


</>
   
    
}
