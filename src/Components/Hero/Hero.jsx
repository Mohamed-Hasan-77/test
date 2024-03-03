import Nav from "../Navbar/Nav";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import "./heroStyle.scss";
import rocketImg from "../../assets/lunch-emoji.png"
import { useRef, useState } from "react";
import axios from "axios";

export default function Hero() {


    const [phoneNumber, setPhoneNumber ] = useState("");

    function handlePhoneNumber (value) { 
        setPhoneNumber(value)
    }



    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);



    async function senUserData(userData) {

        try {
        let { data } = await axios.post( "https://sheetdb.io/api/v1/unnqcrthpchwd", userData );
    
        // catch the error 
        } catch(err) {
            // console.log(err.response);
            
            alert("something Wrong happened please try again")
    
        }
    
        }
    
    const handleSubmit = (event) => {
        event.preventDefault();


        let userInfo = {};


        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
    
        // store User Data 
        userInfo["Date"] = currentDate;
        userInfo.Name = nameInputRef.current.value;
        userInfo.Phone = phoneNumber;
        userInfo.Email = emailInputRef.current.value;
        userInfo.Massage = messageInputRef.current.value;


        senUserData(userInfo)


        let loader = document.querySelector(".heroRight .theloader")
        let done = document.querySelector(".heroRight .submitDone")

    
        
        loader.classList.remove( 'hidden');
    
        setTimeout(() => {
            loader.classList.add("hidden")
        done.classList.remove("hidden")


        // Reset input fields
        nameInputRef.current.value = '';
        setPhoneNumber('');
        emailInputRef.current.value = '';
        messageInputRef.current.value = '';

        }, 1000)


        setTimeout(() => {
        done.classList.add("hidden")
        }, 1800)




        // Reset input fields
        nameInputRef.current.value = '';
        setPhoneNumber('');
        emailInputRef.current.value = '';
        messageInputRef.current.value = '';
    
    };




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

                <form  onSubmit={handleSubmit}>
                    <div className="flex flex-wrap w-1/full md:w-2/3 lg:w-full ">
                        <div className="w-full  mt-5">

                            <h3 className="mb-5 text-white text-2xl w-full text-center"> Get a Call-Back in 50 seconds ! </h3>

                            <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your name (required) </label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={nameInputRef}  required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your Phone Number (required)</label>
                            <PhoneInput country={'us'} inputProps={{  required: true,  }} className=" text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-1 "  onChange={handlePhoneNumber} value={phoneNumber } />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="email" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Your email address </label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={emailInputRef}  required />
                        </div>  

                        <div className="w-full mt-5">
                            <label htmlFor="message" className="block mb-2 text-white text-sm font-medium text-gray-900 "> Message (Optional)</label>
                            <input type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={messageInputRef}   />
                        </div>

                        <button type="submit" className="text-white bg-mainBackColor w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl flex justify-center items-center"> Call Me !  
                            <svg className="hidden submitDone ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>     
                            <div className="theloader hidden  ml-2"></div>   
                        </button>
                        <p className="items-center flex gap-3 mb-0 text-center text-white justify-center mt-8 w-full"><svg width="16" height="16" fill="currentColor" className="bi bi-lock mb-1" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path></svg> 100% Privacy Guaranteed</p>
                    </div>



            </form>

            </div>

            
        </div>

        </div>
    
    </>

}
