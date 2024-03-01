import { useRef } from "react";
import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/logosmarketing-T1-CEl9BVmk.png"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";




export default function CallBack({isOpen, updateState}) {

        const [phoneNumber, setPhoneNumber ] = useState("");

        function handlePhoneNumber (value) { 
            setPhoneNumber(value)
        }

        const nameInputRef = useRef(null);
        // const phoneNumberRef = useRef(null);
        const emailInputRef = useRef(null);
        const messageInputRef = useRef(null);

        
        const handleSubmit = (event) => {
            event.preventDefault();

            let userInfo = {}
        
            // store User Data 
            userInfo.name = nameInputRef.current.value;
            userInfo.phoneNumber = phoneNumber;
            userInfo.email = emailInputRef.current.value;
            userInfo.message = messageInputRef.current.value;



            // Reset input fields
            nameInputRef.current.value = '';
            // phoneNumberRef.current.value = '';
            emailInputRef.current.value = '';
            messageInputRef.current.value = '';
        
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

                <button type="submit" className="text-white bg-mainBackColor hover:bg-black transition-colors w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl"> Call Me !</button>

            </div>

        </form>

    </div>

    </div>


    </>
}
