import "./FAQARstyle.scss"
import ArrowDown from "../../assets/arrow-down-3101.svg"
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react"



export default function FAQAR() {

    const [scrollState, setScrollState] = useState(false);

    return (
    <div className="faqs">
        <div className="container">
            <div className="title">
                <h2 className="line-under"> FAQs </h2>
            </div>    

    
            <div className="flex justify-between items-center flex-wrap  ">

                <div className="text w-full lg:w-1/2 mt-20 lg:mt-0 ">

                <div className="m-2 space-y-5">


                    <div className="group g1 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="1">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            What is a trade license?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                <p>
                                Also referred to as a business license, a trade license is a document that specifies the activities that a company can carry out in the UAE.
                                </p>

                                <ul className="mt-4"> 
                                    <li>Professional license – For professionals, craftsmen and artisans</li>
                                    <li>Commercial license – For all trading activities</li>
                                    <li>Industrial license – For all industrial and manufacturing activities</li>
                                </ul>

                            </div>
                    </div>


                    <div className="group g2 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="2">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                        What documents do I need to set up my company?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                <p>
                                The requirements may vary depending on which jurisdiction you will set up your company (free zone or mainland), but the basic documents include:
                                </p>

                                <ul className="mt-4"> 
                                    <li>Attested copy of shareholder and director passports</li> 
                                    <li>Passport Copies</li>
                                    <li>Activities Details</li>
                                    <li>Photograph</li> 
                                    <li>Trade Name options</li>
                                </ul>

                            </div>
                    </div>


                    <div className="group g3 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="3">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                        How do I start the visa process?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                <p>
                                    Once your trade license is issued, you will then receive your establishment card (some jurisdictions automatically issue the establishment card, while others issue it upon request).
                                </p>

                                <p className="mt-4">
                                After your establishment card has been issued, you can proceed with applying for a visa. You will need to submit the following documents:
                                </p>

                                <ul className="mt-4"> 
                                    <li>Passport copy</li>
                                    <li>Digital photo (passport size)</li> 
                                    <li>Entry permit</li>
                                    <li>Current visa status (optional for those who are already inside the country)</li>
                                </ul>

                            </div>
                    </div>


                    <div className="group g4 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="4">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                        What is a free zone?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                <p>
                                A free zone is a special economic jurisdiction in the UAE that offers the following business benefits:
                                </p>

                                <ul className="my-4"> 
                                    <li>100% foreign ownership of a business</li>
                                    <li>100% repatriation of profits</li>
                                    <li>0% income tax</li>
                                    <li>Corporate tax exemption (subject to meeting certain criteria)</li>
                                    <li>No customs duties on imports and exports</li>
                                    <li>No paid upfront share capital (in most free zones)</li>
                                    <li>No physical office space required (depending on the free zone)</li>
                                </ul>

                                <p>
                                    However, if your b  usiness is registered in a free zone, you can only trade within that free zone and internationally. To conduct trade in the mainland, you will need to get permission from the concerned free zone authority and the local Department of Economic Development.                               
                                </p>

                            </div>
                    </div>


                    <div className="group g5 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="5">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                        What is the difference between free zone and mainland?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                <p>
                                As mentioned above, free zone companies can only trade and operate within the free zone where they are registered and overseas. In contrast, mainland companies are free to trade anywhere in the UAE and outside of the country.
                                </p>

                                <ul className="mt-4"> 
                                    <li>100% foreign company ownership (in most activities)</li> 
                                    <li>100% profit repatriation</li> 
                                    <li>0% income tax</li> 
                                    <li>Access to over 3,000 business activities</li>
                                    <li>Freedom to trade anywhere in the UAE and overseas</li>
                                    <li>Ability to bid on government contracts and tenders</li>
                                    <li>Access to an unlimited number of visas</li>
                                    <li>Quick bank account opening approval</li> 
                                </ul>

                            </div>
                    </div>


                    <div className="group g6 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="6">
                        <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                            
                        How often do I need to renew my trade license?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            A mainland trade license is renewed annually. A free  license, on the other hand, has a different validity period depending on the free zone authority. This can range from one to five years.
                            </div>
                    </div>


                </div>

                </div>

                <div className="achieveBoxes w-full lg:w-1/2 flex justify-center items-center flex-wrap py-5 ">

                    <div className="aBox py-4  lg:p-4  w-full lg:w-1/2">
                        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
                        <ScrollTrigger duration={10} onEnter={() => setScrollState(true)} >
                        <h3> 
                            {scrollState && 
                            
                            <CountUp start={0} end={12}>
                            </CountUp>
                        }+ Years </h3>
                        </ScrollTrigger>
                            <p> We are in Business </p>
                        </div>
                    </div>

                    <div className="aBox py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
                            {/* <h3> 25,000 + </h3> */}

                            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                                <h3> 
                                    {scrollState && 
                                    
                                    <CountUp start={0} end={25000}>
                                    </CountUp>
                                    } +  
                                </h3>
                            </ScrollTrigger>
                            <p>Companies we’ve helped to create </p>
                        </div>
                    </div>

                    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
                            {/* <h3> 40,000 + </h3> */}

                            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                                <h3> 
                                    {scrollState && 
                                    
                                    <CountUp start={0} end={40000}>
                                    </CountUp>
                                    } +  
                                </h3>
                            </ScrollTrigger>
                            <p> Clients worldwide </p>
                        </div>
                    </div>

                    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
                            {/* <h3> 40   </h3> */}

                            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                                <h3> 
                                    {scrollState && 
                                    
                                    <CountUp start={0} end={40}>
                                    </CountUp>
                                    }   Hours 
                                </h3>
                            </ScrollTrigger>

                            <p>  Freed up from admin work for our clients monthly </p>
                        </div>
                    </div>


                </div>
            </div>


        </div>   
    </div>
)
}
