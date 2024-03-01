import "./BankPartnersStyle.scss"
import BankImg1 from "../../assets/bankImages/bank-account-open-assistance-adcb.png"
import BankImg2 from "../../assets/bankImages/bank-account-open-assistance-emirates-nbd.png"
import BankImg3 from "../../assets/bankImages/bank-account-open-assistance-fab.png"
import BankImg4 from "../../assets/bankImages/bank-account-open-assistance-mashreq.png"
import DigitalBankImg from "../../assets/bankImages/digital-bank-account-opening-assistant.webp"
import { useState } from "react"

import 'react-phone-input-2/lib/style.css';
import CallBack from "../CallBack/CallBack"

export default function BankPartners() {

    
    const [requestCallBack, setRequestCallBack] = useState(false);

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };


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



    <CallBack isOpen={requestCallBack}  updateState={updateRequestCallBack} />


    </>
}
