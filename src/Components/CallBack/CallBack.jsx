import { useRef } from "react";
import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/logosmarketing-T1-CEl9BVmk.png"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import axios from "axios";




export default function CallBack({isOpen, updateState}) {

        const [phoneNumber, setPhoneNumber ] = useState("");

        function handlePhoneNumber (value) { 
            setPhoneNumber(value)
        }

        const nameInputRef = useRef(null);
        const emailInputRef = useRef(null);
        const messageInputRef = useRef(null);


        async function senUserData(userData) {

            // try and catch if you are not sure if there will be an error with api 
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



            let loader = document.querySelector(".requestCallback .theloader")
            let done = document.querySelector(".requestCallback .submitDone")
    
            
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


        
        };





    return <>
    
    <div className={`requestCallback   ${isOpen == false ? "invisible opacity-0 hidden "  :  "visible opacity-1 flex"  } `}>

    <div className={`requestBox  `}>

    <img onClick={()=> updateState(!isOpen)} src={XphoneImg} width={16} className='closeRequest' alt="XImg"  />

        <form onSubmit={handleSubmit}>
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
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={nameInputRef} required />
                </div>

                <div className="w-full mt-5">
                    <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium  ">Your Phone Number (required)</label>
                    <PhoneInput country={'us'} inputProps={{  required: true,  }} style={{width: "100%"}} className="   text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-1  " onChange={handlePhoneNumber} value={phoneNumber }  />
                </div>

                <div className="w-full mt-5">
                    <label htmlFor="email" className="block mb-2 text-white text-sm font-medium  ">Your email address </label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={emailInputRef}  required />
                </div>  

                <div className="w-full mt-5">
                    <label htmlFor="message" className="block mb-2 text-white text-sm font-medium  "> Message (Optional)</label>
                    <textarea  id="message" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  ref={messageInputRef}  />
                </div>

                <button type="submit" className="text-white bg-mainBackColor hover:bg-black transition-colors w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl flex justify-center items-center"> 
                        Call Me ! 
                        <svg className="hidden submitDone ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>     
                        <div className="theloader hidden  ml-2"></div>    
                </button>

            </div>

        </form>

    </div>

    </div>


    </>
}
