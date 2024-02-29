import "./UAEDifferentStyle.scss"
import MrAmr from "../../assets/img.jpeg"
import ImgComponent from '../imgComponent/ImgComponent'

import pointImg from "../../assets/تنزيل (2).svg"
import ArrowDown from "../../assets/arrow-down-3101.svg"


import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/smart-zones-uae-business-setup-logo.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react"



export default function UAEDifferent() {


    const [requestCallBack, setRequestCallBack] = useState(false);



    return <>
    <div className="StartYourJourney bg-white py-24">

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
