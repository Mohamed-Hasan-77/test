import "./FAQstyle.scss"
import ArrowDown from "../../assets/arrow-down-3101.svg"



export default function FAQ() {

    return (
    <div className="faqs">
        <div className="container">
            <div className="title">
                <h2 className="line-under"> FAQs </h2>
            </div>    

    
            <div className="flex justify-between items-center flex-wrap  ">

                <div className="text w-full lg:w-1/2 ">

                <div className="m-2 space-y-5">


                    <div className="group g1 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="1">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            Fast and Efficient ?
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                                We present competitive pricing and cost-effective options, enabling our clients to save money without compromising on the quality of service they receive.
                            </div>
                    </div>


                    <div className="group g2 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="2">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            Cost-Effective Solutions 
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            We present competitive pricing and cost-effective options, enabling our clients to save money without compromising on the quality of service they receive.
                            </div>
                    </div>


                    <div className="group g3 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="3">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            Multilingual Assistance 
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            Our team members are proficient in various languages, including English, Arabic, Hindi, and more, facilitating smooth communication for clients from diverse backgrounds.
                            </div>
                    </div>


                    <div className="group g4 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="4">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            Expert Knowledge 
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            Our team possesses extensive knowledge of the UAE business landscape, encompassing the legal and regulatory prerequisites for establishing businesses in the UAE.
                            </div>
                    </div>


                    <div className="group g5 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="5">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            One-Stop-Shop for all Services
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            Acting as a one-stop-shop, we cover all aspects of business setup, from licensing and permits to office space and banking services, simplifying the process for our clients by providing everything in a single location.
                            </div>
                    </div>


                    <div className="group g6 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="6">
                        <div className="flex cursor-pointer group-focus:bg-mainLinearColorTwo p-3 px-4 items-center  rounded-2xl justify-between">
                            
                            Robust Network
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

                        </div>
                            <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            With a robust network of partners and service providers in the UAE, we offer a diverse range of business services and resources to our clients.
                            </div>
                    </div>


                </div>

                </div>

                <div className="achieveBoxes w-full lg:w-1/2 flex justify-center items-center flex-wrap py-5 ">

                    <div className="aBox py-4  lg:p-4  w-full lg:w-1/2">
                        <div className="innerAbox rounded-3xl bg-mainLinearColorTwo flex justify-center items-center flex-col space-y-3">
                            <h3> 12+ Years </h3>
                            <p> We are in Business </p>
                        </div>
                    </div>


                    <div className="aBox py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox rounded-3xl bg-mainLinearColorTwo flex justify-center items-center flex-col space-y-3">
                            <h3> 12+ Years </h3>
                            <p> We are in Business </p>
                        </div>
                    </div>

                    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox rounded-3xl bg-mainLinearColorTwo flex justify-center items-center flex-col space-y-3">
                            <h3> 12+ Years </h3>
                            <p> We are in Business </p>
                        </div>
                    </div>

                    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
                        <div className="innerAbox rounded-3xl bg-mainLinearColorTwo flex justify-center items-center flex-col space-y-3">
                            <h3> 12+ Years </h3>
                            <p> We are in Business </p>
                        </div>
                    </div>


                </div>
            </div>


        </div>   
    </div>
  )
}
