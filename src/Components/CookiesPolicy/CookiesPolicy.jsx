import "./cookiesPolicyStyle.scss"
import myImage from "../../assets/logosmarketing-T1-CEl9BVmk.png"
import PolicyFooter from '../policyFooter/policyFooter';
import { Link } from "react-router-dom";

export default function CookiesPolicy() {
return (
    <div id="privacy" >



    <div className="navBar ">
        <div className="container flex  justify-between">

        
        <div className="logo">

            <Link to={"/"}>
                <img id="pageLogo" src={myImage}  alt="logo"/>
            </Link>
        </div>

        <div className="navright flex items-center ">
            <div className="btn mr-8">
                <button className=" position-relative  bg-mainBackColor fw-bold  py-2 px-3  rounded-full outline-none"> COST CALCULATOR </button>
            </div>


            <div className="num mt-1 mx-4 hidden lg:block text-white hover:text-white transition-colors duration-200">
                <a  href="tel:+971557480115" title="Call Us - +971557480115">+971557480115</a>
            </div>

            <div className="lang ml-3 border p-2 flex justify-center items-center  rounded bg-mainBackColor ">
                <Link  className="text-xl text-white"> عربي </Link>
            </div>
            
        </div>
        </div>
    </div>


    <div id="Privacy" className="content">
        <div className="title pb-32 pt-24 text-white">
            <div className="container">
                        <ul className="breadcrumb flex mb-5">
                            <li className=""><Link to={"/"}> Homepage </Link></li> 
                            <li className="ml-5 active" > Cookies Policy</li> 
                        </ul>
                <h1 className="text-6xl  "><strong> <span className="under-line"> Cookies </span>   Policy </strong></h1>

                <a href="#text" className="arrowDown w-fit p-3 ml-auto border rounded-full block">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#ffffff" className="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path></svg>
                </a>
            </div>            
        </div>


        <div id="text" className="text py-16 text-white">
            <div className="container the-content"> <p><strong>Cookies Policy for info@smarkting.llc</strong></p> <p className="font-2">Effective date: 01-06-2023</p> <h2>1. Introduction</h2> <p className="font-2">Welcome to info@smarkting.llc (the “Website”). This Cookies Policy is designed to inform you about the use of cookies and similar tracking technologies on our Website. By continuing to browse and use our Website, you consent to the use of cookies as described in this policy.</p> <h2>2. What are Cookies?</h2> <p className="font-2">Cookies are small text files that are placed on your computer or mobile device when you access our Website. They are widely used to make websites work more efficiently and to provide information to website owners.</p> <h2>3. How We Use Cookies</h2> <p className="font-2">We use cookies for various purposes, including but not limited to:</p> <p className="font-2">– Improving the user experience: Cookies help us provide a smoother browsing experience and remember your preferences.</p> <p className="font-2">– Analyzing website traffic: Cookies assist us in understanding how users interact with our Website, enabling us to enhance its functionality and content.</p> <p className="font-2">– Advertising and marketing: We may use cookies to deliver relevant advertisements to you based on your interests and browsing behavior.</p> <p className="font-2">– Third-party services: We may use cookies provided by third-party service providers to facilitate various functions on our Website.</p> <h2>4. Types of Cookies We Use</h2> <p className="font-2"><strong>a Essential Cookies:</strong> These cookies are necessary for the proper functioning of our Website and enable you to navigate around it and use its features.</p> <p className="font-2"><strong>b) Analytical/Performance Cookies:</strong> These cookies help us analyze and understand how users interact with our Website. They do not collect personal information and are used solely to improve website performance.</p> <p className="font-2"><strong>c) Functional Cookies:</strong> Functional cookies enable the Website to remember your preferences and choices to provide a more personalized experience.</p> <p className="font-2"><strong>d) Advertising Cookies:</strong> These cookies track your browsing behavior to deliver targeted advertisements that may be of interest to you.</p> <h2>5. Managing Cookies</h2> <p className="font-2">Most web browsers are configured to accept cookies automatically. However, you can choose to modify your browser settings to control or delete cookies. Please note that disabling cookies may affect the functionality and user experience of our Website.</p> <h2>6. Third-party Cookies</h2> <p className="font-2">We may allow third-party service providers, such as Google Analytics, to set cookies on our Website to analyze website traffic and improve user experience. These providers have their own privacy policies and cookies policies, which we recommend you review.</p> <h2>7. Changes to this Cookies Policy</h2> <p className="font-2">We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page regularly for any updates.</p> <h2>8. Contact Us</h2> <p className="font-2">If you have any questions or concerns about our Cookies Policy, please contact us at info@info@smarkting.llc</p> <p className="font-2">By using our Website, you acknowledge that you have read and understood this Cookies Policy and agree to our use of cookies in accordance with this policy.</p> </div>
        </div>
    </div>



    <PolicyFooter/>



</div>
)
}
