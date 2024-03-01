import "./StartYourJourneyStyle.scss"
import MrAhmed from "../../assets/Mr Ahmed.jpg"

import 'react-phone-input-2/lib/style.css';
import ImgComponent from '../imgComponent/ImgComponent'

import { useState } from "react";
import CallBack from "../CallBack/CallBack";


export default function StartYourJourney() {

    const [requestCallBack, setRequestCallBack] = useState(false);

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };

    return <>
    <div className="StartYourJourney bg-white py-20">

        <div className="container flex justify-between flex-wrap overflow-hidden lg:overflow-visible">


            <ImgComponent myImg={MrAhmed} degree="-125deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3>
                Let's Help you in initiating your 
                <span className="textMainColor"> Journey <span className="under-line textMainColor"> Towards </span> Success. </span>
                </h3>


                <p>  
                Welcome to Smarketing
                <sup className="font-2 fw-light">®</sup>
                UAE Business Setup Consultants, your all-in-one destination for fulfilling your business establishment requirements in the UAE. We provide a comprehensive array of services designed to address all aspects of your business setup necessities. With our team of professionals specializing in company formation, we offer guidance throughout the entire process, covering tasks such as company registration, license acquisition, visa processing, legal documentation, bank account opening, office setup, and more.
                </p>

                <button onClick={()=> setRequestCallBack(!requestCallBack)}  className="px-7 py-2.5 rounded-full bg-mainBackColor text-white text-xl mt-7"> 
                    Request a Callback 
                </button>
            </div>

        </div>
        
    </div>




    <CallBack isOpen={requestCallBack}  updateState={updateRequestCallBack} />



</>
}
