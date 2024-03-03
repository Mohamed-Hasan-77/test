import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


import footervisa from "../../assets/footer/card-visa.svg"
import footermastercard from "../../assets/footer/card-mastercard.svg"
import footerexpress from "../../assets/footer/american-express.svg"
import footerpaypal from "../../assets/footer/paypal.svg"
import footerwestern from "../../assets/footer/western-union.svg"


import "./FooterARStyle.scss"
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';


function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function FooterAR() {


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


        let loader = document.querySelector(".footerLeft .theloader")
        let done = document.querySelector(".footerLeft .submitDone")

    
        
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






    return (
    <div id="footerAR">
        <div className="container flex justify-center items-center flex-wrap py-20 pt-12">


            <div className="footerLeft w-full lg:w-1/3">

                <form onSubmit={handleSubmit} className="flex flex-wrap  " >

                        <h3 className="mb-5 text-4xl w-full text-white"> <strong>احجز استشارة مجانية الآن</strong>  </h3>

                        <div className="w-full  mt-5">


                            <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium text-gray-900 ">اسمك (مطلوب) </label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={nameInputRef}  required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium text-gray-900 ">رقم هاتفك (مطلوب)</label>
                            <PhoneInput country={'us'} inputProps={{  required: true,  }} className="bg-gray-50 phInput text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-1 "  onChange={handlePhoneNumber} value={phoneNumber } />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="email" className="block mb-2 text-white text-sm font-medium text-gray-900 ">عنوان بريدك الإلكتروني </label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2 "  ref={emailInputRef}  required />
                        </div>  

                        <div className="w-full mt-5">
                            <label htmlFor="message" className="block mb-2 text-white text-sm font-medium text-gray-900 "> رسالة (اختياري)</label>
                            <input type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  ref={messageInputRef}  />
                        </div>

                        <button type="submit" className="text-white bg-mainBackColor w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl flex justify-center items-center"> اتصل بي !

                            <svg className="hidden submitDone mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>     
                            <div className="theloader hidden  mr-2"></div> 
                        
                        </button>

                </form>

            </div>




        <div className="footerRight w-full lg:w-2/3 text-white flex lg:p-16 py-16  flex-wrap md:flex-nowrap">

            <div className="footerTitle ">
                    <h3 className='text-3xl font-bold'>
                        تواصل مع مستشاري إعداد الأعمال في اس ماركتينج<sup className="font-2 fw-light mr-1">®  </sup>
                        الإمارات العربية المتحدة اليوم
                    </h3>

                    <div className="contact my-5 flex justify-start lg:items-center text-2xl flex-col md:flex-row space-y-4 md:space-y-0">
                        <a href="tel:+971557480115" className=" text-white flex gap-3 items-center"> <svg width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg> <span className="ps-2">+971557480115</span> </a>

                        <a href="mailto:info@smarkting.llc" className=" text-white flex md:mr-7  gap-3 items-center"><svg width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg>  info@smarkting.llc</a>
                    </div>

                    <hr />

                    <p className=" my-7 fw-light flex items-center ">
                        <span className=' text-xl ml-5'>    المكتب الرئيسي:   </span>
                        <span className='font-bold text-sm'> الشارقة - الخان - شارع 98/1 </span>
                    </p>


                    <div className="map">
                        <iframe className="w-full rounded-2xl " width="600" height="300" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.42518122317912!2d55.38689582734239!3d25.310825394944878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bf670958689%3A0xb0b15a78947a9db!2s198%20Al%20Khan%20St%20-%20Al%20Nahdha%20-%20Industrial%20Area%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1709061092042!5m2!1sen!2seg"></iframe>
                    </div>
            </div>

            </div>


        </div>


        <div className="footerBottom text-white  py-6">
            <div className="container flex justify-between items-center flex-wrap space-y-3 ">


            <div className="imgs flex lg:order-2 w-full lg:w-1/3 justify-center items-center  gap-3">
                    <img className='rounded-md' src={footervisa} alt="visa" />
                    <img className='rounded-md' src={footermastercard} alt="mastercard" />
                    <img className='rounded-md' src={footerexpress} alt="express" />
                    <img className='rounded-md' src={footerpaypal} alt="paypal" />
                    <img className='rounded-md' src={footerwestern} alt="western" />
                </div>


                <p className="copyright flex justify-center items-center lg:order-1 w-full lg:w-1/3  text-light  mb-0 ">© 2013 - 2024 Smarketing <sup className="text-xs fw-light">®</sup> GROUP, All Rights Reserved</p>


                <div className="flex items-center justify-center lg:order-3 w-full lg:w-1/3 d-flex  "> 
                    <Link onClick={() => toTop()} to={"/PrivacyPolicy"} title="Privacy Policy" className="mr-2">Privacy Policy</Link> 
                    <Link onClick={() => toTop()} to={"/TermsAndConditions"} title="Terms and Conditions" className="mr-3">Terms and Conditions</Link>
                    <Link onClick={() => toTop()} to={"/CookiesPolicy"} title="Cookies Policy" className="font-2 text-light text-decoration-none fw-light">Cookies Policy</Link> 
                </div>
            </div>
            
        </div>

    </div>
)
}
