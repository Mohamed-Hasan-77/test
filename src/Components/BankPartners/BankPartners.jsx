import "./BankPartnersStyle.scss"
import BankImg1 from "../../assets/bankImages/bank-account-open-assistance-adcb.png"
import BankImg2 from "../../assets/bankImages/bank-account-open-assistance-emirates-nbd.png"
import BankImg3 from "../../assets/bankImages/bank-account-open-assistance-fab.png"
import BankImg4 from "../../assets/bankImages/bank-account-open-assistance-mashreq.png"
import DigitalBankImg from "../../assets/bankImages/digital-bank-account-opening-assistant.webp"
import { useState } from "react"

import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/smart-zones-uae-business-setup-logo.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function BankPartners() {

    
    const [requestCallBack, setRequestCallBack] = useState(false);


    return <>
    <div className='bank '>


<h2 className=" block md:hidden w-full  pl-8">
                    Get Your Corporate Bank Account for your Business with our Banking Partners
                </h2>


        <div className="main flex justify-between">

        

            <div className="left-col w-1/2  px-8 pb-8">

            <h2 className=" hidden md:block w-full  ">
                    Get Your Corporate Bank Account for your Business with our Banking Partners
                </h2>

                <div className="bankImages flex flex-wrap">

                    <div className="img w-full md:w-1/3">
                        <img width="212" height="46" src={BankImg4} className="" alt="BankImg" />
                    </div>

                    <div className="img w-full md:w-1/3">
                    <img width="161" height="49" src={BankImg1} className="" alt="BankImg" />
                        
                    </div>

                    <div className="img w-full md:w-1/3">
                        <img width="212" height="53" src={BankImg2} className="" alt="BankImg" />
                        
                    </div>

                    <div className="img w-full md:w-1/3">
                        <img width="91" height="53" src={BankImg3} className="" alt="BankImg" />
                    </div>






  

                </div>
                <div className="btn w-full ">
                        <button onClick={()=> setRequestCallBack(!requestCallBack)} className=" px-3 lg:px-7 py-2.5 rounded-full bg-mainBackColor text-white text-lg lg:text-2xl my-12 "> 
                            Contact Us 
                        </button>
                    </div>
            </div>


            <div className="right-col w-1/2  flex justify-end items-end">
                <img width="1099" height="701" src={DigitalBankImg} alt="DigitalBankImg" />
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
