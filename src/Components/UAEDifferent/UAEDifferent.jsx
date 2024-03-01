import "./UAEDifferentStyle.scss"
import MrAmr from "../../assets/img.jpeg"
import ImgComponent from '../imgComponent/ImgComponent'

import pointImg from "../../assets/تنزيل (2).svg"
import ArrowDown from "../../assets/arrow-down-3101.svg"


import 'react-phone-input-2/lib/style.css';
import { useState } from "react"
import CallBack from "../CallBack/CallBack"



export default function UAEDifferent() {


    const [requestCallBack, setRequestCallBack] = useState(false);



    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };



    return <>
    <div className="StartYourJourney bg-white py-10 lg:py-5 ">

        <div className="container flex  items-center justify-between flex-wrap overflow-hidden lg:overflow-visible">



            <ImgComponent myImg={MrAmr} degree="285deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3>
                What Makes <br/>
                <span className="textMainColor">  <span className="under-line textMainColor"> Smarketing  </span> <sup className="font-2 fw-light textMainColor">®</sup>  UAE Different?   </span>
                </h3>


                    <div className="m-2 space-y-5">


                        <div className="group g1 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="1">

                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Fast and Efficient </span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>

                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                    We present competitive pricing and cost-effective options, enabling our clients to save money without compromising on the quality of service they receive.
                                </div>
                        </div>


                        <div className="group g2 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="2">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Cost-Effective Solutions </span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                We present competitive pricing and cost-effective options, enabling our clients to save money without compromising on the quality of service they receive.
                                </div>
                        </div>


                        <div className="group g3 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="3">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Multilingual Assistance </span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                Our team members are proficient in various languages, including English, Arabic, Hindi, and more, facilitating smooth communication for clients from diverse backgrounds.
                                </div>
                        </div>


                        <div className="group g4 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="4">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Expert Knowledge </span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                Our team possesses extensive knowledge of the UAE business landscape, encompassing the legal and regulatory prerequisites for establishing businesses in the UAE.
                                </div>
                        </div>


                        <div className="group g5 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="5">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> One-Stop-Shop for all Services</span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                Acting as a one-stop-shop, we cover all aspects of business setup, from licensing and permits to office space and banking services, simplifying the process for our clients by providing everything in a single location.
                                </div>
                        </div>


                        <div className="group g6 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="6">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Robust Network</span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                With a robust network of partners and service providers in the UAE, we offer a diverse range of business services and resources to our clients.
                                </div>
                        </div>


    
                        <div className="group g7 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="7">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" />  Tailored Solutions</span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                Our approach involves crafting customized solutions to meet the distinctive requirements of each client, ensuring a seamless and stress-free business setup process.
                                </div>
                        </div>



                        <div className="group g8 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="8">
                            <div className="flex cursor-pointer group-focus:bg-mainBackColor p-2 text-slate-500 px-4 items-center  rounded-2xl justify-between">
                                
                                <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="mr-2 w-6  " alt="point" /> Outstanding Customer Support </span>
                                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                            </div>
                                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                Dedicated to excellence, our team is committed to providing exceptional customer service and support throughout the entire business setup journey, ensuring our clients feel confident and well-informed at every stage.
                                </div>
                        </div>

                    </div>




                <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-xl mt-7 text-white"> 
                    Request a Callback ! 
                </button>
            </div>

        </div>
        
    </div>



    <CallBack isOpen={requestCallBack}  updateState={updateRequestCallBack} />

</>
}
