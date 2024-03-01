import "./PFooter.scss"
import { Link } from "react-router-dom";
import myImage from "../../assets/logosmarketing-T1-CEl9BVmk.png"


import footervisa from "../../assets/footer/card-visa.svg"
import footermastercard from "../../assets/footer/card-mastercard.svg"
import footerexpress from "../../assets/footer/american-express.svg"
import footerpaypal from "../../assets/footer/paypal.svg"
import footerwestern from "../../assets/footer/western-union.svg"
import { useRef } from "react";



export default function PolicyFooter() {


    function toTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }



    const nameInputRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        let userInfo = {}
    
        // store User Data 
        userInfo.name = nameInputRef.current.value;
        userInfo.Lname = lastNameRef.current.value;
        userInfo.phoneNumber = phoneNumberRef.current.value;
        userInfo.email = emailInputRef.current.value;
        userInfo.message = messageInputRef.current.value;


        // Reset input fields
        nameInputRef.current.value = '';
        lastNameRef.current.value = '';
        phoneNumberRef.current.value = '';
        emailInputRef.current.value = '';
        messageInputRef.current.value = '';
    
    };



return <>

    <div id="policyFooter">

        <div className="container flex flex-wrap py-20 justify-between">


            <div className="policyLeft w-full lg:w-1/2 text-white  flex py-10   flex-wrap md:flex-nowrap">
                <div className="rocket mr-5">
                </div> 
                <div className="policyTitle p-5">
                    <h2 className="pb-10">
                        <span className="under-line"> Get </span>   in Touch 
                    </h2>

                    <p className=" fisrtP pb-2 pb-md-4 pb-lg-5">
                        <strong>Want to know more</strong>,
                        talk to Smart Zones <sup className="font-2 fw-light">®</sup> Dubai advisory team they will <strong>be happy to help</strong>.
                        Ready to <strong>invest in your future</strong>?
                    </p>

                    <div className="contact my-5 flex-wrap flex    items-center  ">
                        <a href="tel:+971557480115" className=" text-white flex  gap-2 items-center"> <svg width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg> <span className="ps-2">+971557480115</span> </a>
                        <a href="tel:+971557480115" className="flex gap-2 items-center ml-8 text-white text-decoration-none"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg><span> +971557480115</span> </a>
                        <a href="mailto:info@smarkting.llc" className=" text-white flex gap-2 items-center w-full mt-5"><svg width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg>  info@smarkting.llc</a>
                    </div>
                </div>
            </div>


            <div className="policyRight w-full lg:w-1/2 border p-12 rounded-2xl">

                <form  onSubmit={handleSubmit} >
                    <div className="flex flex-wrap w-1/full md:w-2/3 lg:w-full ">

                        <div className="w-1/2  mt-5 px-2">
                            <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium text-gray-900 ">First name </label>
                            <input type="text" id="first_name" className=" border border-gray-300 text-white text-sm bg-transparent focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2 " ref={nameInputRef}  required />
                        </div>

                        <div className="w-1/2  mt-5 px-2">
                            <label htmlFor="last_name" className="block mb-2 text-white text-sm font-medium text-gray-900 ">Last name </label>
                            <input type="text" id="last_name" className=" border border-gray-300 text-white text-sm bg-transparent focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={lastNameRef}  required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="email" className="block mb-2 text-white text-sm font-medium text-gray-900 "> Email Address </label>
                            <input type="email" id="email" className=" border border-gray-300 text-white text-sm bg-transparent focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={emailInputRef}  required />
                        </div>  
            
                        <div className="w-full mt-5">
                            <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium text-gray-900 "> Phone </label>
                            <input type="tel" id="email" className=" border border-gray-300 text-white text-sm bg-transparent focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  ref={phoneNumberRef }  required />
                        </div>

                        <div className="w-full mt-5">
                            <label htmlFor="Message" className="block mb-2 text-white text-sm font-medium text-gray-900 "> Message (Optional)</label>
                            <textarea  id="Message" className=" border border-gray-300 text-white text-sm bg-transparent focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={messageInputRef}   />
                        </div>
                    

                        <button type="submit" className="text-white bg-mainBackColor rounded-xl hover:bg-black transition-all duration-300 w-full px-5 py-2.5 text-center mt-5 text-xl"> Send inquiry </button>


                    </div>



            </form>

            </div>


        </div>

        <div className="tips flex items-center py-40 md:py-14  ">
            <div className="container text-white flex justify-center items-center flex-col lg:p-24 text-center">

                <h2 className="mt-20">
                    Get tips on how to <br />
                    run your  <span className="under-line"> business </span>  smarter
                </h2>

                <div className="subscribe lg:mx-52 mt-12 ">
                    <p >
                    Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.
                    </p>

                    <div className="btn w-full ">
                        <input type="text" placeholder=" Email Address"/> 
                        <button className="bg-mainBackColor text-md md:text-xl">Subscribe</button>
                    </div>

                    <p className="Conditions text-center text-white ">By clicking, you agree to our
                        <a href="#" className="" title="Terms &amp; Conditions" >Terms &amp; Conditions</a>
                        , 
                        <a href="#" className="" title="Privacy and Data Protection Policy" >Privacy and Data Protection Policy</a>
                    </p>

                </div>
            </div>
        </div>


        <div className="footer  text-white flex pb-16 flex-wrap md:flex-nowrap bg-black ">



                <div className="container ">

                    <hr className="my-16"/>

                        <h3 className='text-2xl flex justify-center md:justify-start items-center text-center flex-wrap font-bold'>
                            <img src={myImage} className="mr-4 mb-5 md:mb-0" alt="logo" />
                            Get In Touch With  Smarketing  <sup className="font-2 fw-light mr-1">®  </sup>
                            UAE Business Setup Consultants Today 
                        </h3>

                        <div className="reachUs my-5 flex justify-evenly lg:items-center  flex-col lg:flex-row space-y-4 lg:space-y-0">
                                <a href="tel:+971557480115" className=" text-white flex gap-3 items-center"> <svg width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg> <span className="ps-2">+971557480115</span> </a>

                                <a href="mailto:info@smarkting.llc" className=" text-white flex gap-3 items-center"><svg width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg>  info@smarkting.llc</a>
                                
                        <p className=" my-7 fw-light flex items-center  gap-4">
                            <span className=' text-xl '> Head Office: </span>
                            <span className='font-bold text-sm'> Sharjah -  Al Khan - St 98/1 </span>
                        </p>
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





</>
}
