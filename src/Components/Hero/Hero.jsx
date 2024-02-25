import Nav from "../Navbar/Nav";
import "./heroStyle.scss";
import rocketImg from "../../assets/lunch-emoji.png"

export default function Hero() {
    return <>
    
        <div id="hero" >
            <Nav/>
            <div className="container flex flex-wrap py-20 justify-between">


            <div className="heroLeft w-full lg:w-2/3 text-white flex py-10 ml-0  xl:-ml-16  flex-wrap md:flex-nowrap">
                <div className="rocket mr-5">
                <img  src={rocketImg}  alt="rocketImg" />
                </div> 
                <div className="heroTitle ">
                    <h1>
                        Launch Your Dream Company In UAE
                        at <span className="under-line"> Just </span> 5,650 AED 
                    </h1>

                    <h2 className="text-3xl mt-7">
                    UAE’S #1 BUSINESS SETUP CONSULTANTS
                    </h2>

                    <p className="text-3xl mt-7 fw-light ">
                    From Vision to Reality <br/>
                    let Dubai be your Entrepreneurial Oasis
                    </p>
                </div>
            </div>


            <div className="heroRight w-full lg:w-1/3">

                <form>
                    <div className="flex flex-wrap w-1/full md:w-2/3 lg:w-full ">
                        <div className="w-full  mt-5">

                            <h3 className="mb-5 text-mainColor text-2xl w-full text-center"> Get a Call-Back in 50 seconds ! </h3>

                            <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your name (required) </label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your Phone Number (required)</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="company" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your email address </label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
                        </div>  

                        <div className="w-full mt-5">
                            <label htmlFor="website" className="block mb-2 text-white text-sm font-medium text-gray-900 "> Message (Optional)</label>
                            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "   />
                        </div>

                        <button type="submit" className="text-white bg-mainLinearColor w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl"> Call Me !</button>


                        <p className="items-center flex gap-3 mb-0 text-center text-white justify-center mt-8 w-full"><svg width="16" height="16" fill="currentColor" className="bi bi-lock mb-1" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path></svg> 100% Privacy Guaranteed</p>
                    </div>



            </form>

        </div>
        </div>

        </div>
    
    </>

}
