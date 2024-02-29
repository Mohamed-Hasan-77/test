import "./privacyStyle.scss"
import myImage from "../../assets/logosmarketing-T1-CEl9BVmk.png"
import PolicyFooter from './../policyFooter/policyFooter';
import { Link } from "react-router-dom";

export default function Privacy() {
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

            {/* <div className="lang ml-3 border p-2 flex justify-center items-center  rounded bg-mainBackColor ">
                <Link to={"privacyAr"} className="text-xl text-white"> عربي </Link>
            </div> */}

            
        </div>
        </div>
    </div>


    <div id="Privacy" className="content">
        <div className="title pb-20 lg:pb-32 pt-24 text-white">
            <div className="container">
                        <ul className="breadcrumb flex mb-5">
                            <li className=""><Link to={"/"}> Homepage </Link></li> 
                            <li className="ml-5 active" >Privacy policy</li> 
                        </ul>
                <h1 className="text-6xl  "><strong> <span className="under-line"> Privacy </span>  policy</strong></h1>

                <a href="#text" className="arrowDown w-fit p-3 ml-auto border rounded-full block">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#ffffff" className="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path></svg>
                </a>
            </div>            
        </div>


        <div id="text" className="text py-16 text-white">
            <div className="container">
                <p className="font-2">Smarketing<sup className="font-2 fw-light">®</sup> UAE Online Privacy policy applies only to activities Smarketing<sup className="font-2 fw-light">®</sup> UAE engages in on its website and does not apply to Smarketing<sup className="font-2 fw-light">®</sup> UAE activities that are “offline” or unrelated to the website.</p> <p className="font-2">Smarketing<sup className="font-2 fw-light">®</sup> UAE collects certain anonymous data regarding the usage of the website. This information does not personally identify users, by itself or in combination with other information, and is gathered to improve the performance of the website. The anonymous data collected by the Smarketing<sup className="font-2 fw-light">®</sup> UAE website can include information such as the type of browser you are using, and the length of the visit to the website. You may also be asked to provide personally identifiable information on the Smarketing<sup className="font-2 fw-light">®</sup> UAE website, which may include your name, address, telephone number and e-mail address. This information can be gathered when feedback or e-mails are sent to Smarketing<sup className="font-2 fw-light">®</sup> UAE, when you register for services, or make purchases via the website. In all such cases you have the option of providing us with personally identifiable information.</p> <p className="font-2"><strong>USE AND DISCLOSURE OF INFORMATION.</strong> Except as otherwise stated below, we do not sell, trade or rent your personally identifiable information collected on the site to others. The information collected by our site is used to process orders, to keep you informed about your order status, to notify you of products or special offers that may be of interest to you, and for statistical purposes for improving our site. We will disclose your Delivery information to third parties for order tracking purposes or process your check or money order, as appropriate, fill your order, improve the functionality of our site, perform statistical and data analyses deliver your order and deliver promotional emails to you from us. For example, we must release your mailing address information to the delivery service to deliver products that you ordered.</p> <p className="font-2">All credit/debit cards’ details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties.</p> <p className="font-2"><strong>COOKIES.</strong> Cookies are small bits of data cached in a user’s browser. Smarketing<sup className="font-2 fw-light">®</sup> UAE utilizes cookies to determine whether or not you have visited the home page in the past. However, no other user information is gathered.</p> <p className="font-2">Smarketing<sup className="font-2 fw-light">®</sup> UAE may use non-personal “aggregated data” to enhance the operation of our website, or analyze interest in the areas of our website. Additionally, if you provide Smarketing<sup className="font-2 fw-light">®</sup> UAE with content for publishing or feedback, we may publish your user name or other identifying data with your permission.</p> <p className="font-2">Smarketing<sup className="font-2 fw-light">®</sup> UAE may also disclose personally identifiable information in order to respond to a subpoena, court order or other such request. Smarketing<sup className="font-2 fw-light">®</sup> UAE may also provide such personally identifiable information in response to a law enforcement agencies request or as otherwise required by law. Your personally identifiable information may be provided to a party if Smarketing<sup className="font-2 fw-light">®</sup> UAE files for bankruptcy, or there is a transfer of the assets or ownership of Smarketing<sup className="font-2 fw-light">®</sup> UAE in connection with proposed or consummated corporate reorganizations, such as mergers or acquisitions.</p> <p className="font-2"><strong>SECURITY.</strong> Smarketing<sup className="font-2 fw-light">®</sup> UAE takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, Smarketing<sup className="font-2 fw-light">®</sup> UAE cannot guarantee the security of any information that is disclosed online.</p> <p className="font-2"><strong>OTHER WEBSITES.</strong> Smarketing<sup className="font-2 fw-light">®</sup> UAE is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. We strongly suggest you review such third party’s privacy policies before providing any data to them. We are not responsible for the policies or practices of third parties. Please be aware that our sites may contain links to other sites on the Internet that are owned and operated by third parties. The information practices of those Web sites linked to our site is not covered by this Policy. These other sites may send their own cookies or clear GIFs to users, collect data or solicit personally identifiable information. We cannot control this collection of information. You should contact these entities directly if you have any questions about their use of the information that they collect.</p> <p className="font-2"><strong>MINORS:</strong> Smarketing<sup className="font-2 fw-light">®</sup> UAE does not knowingly collect personal information from minors under the age of 18. Minors are not permitted to use the Smarketing<sup className="font-2 fw-light">®</sup> UAE website or services, and Smarketing<sup className="font-2 fw-light">®</sup> UAE requests that minors under the age of 18 not submit any personal information to the website. Since information regarding minors under the age of 18 is not collected, Smarketing<sup className="font-2 fw-light">®</sup> UAE does not knowingly distribute personal information regarding minors under the age of 18.</p> <p className="font-2"><strong>CORRECTIONS AND UPDATES.</strong> If you wish to modify or update any information Smarketing<sup className="font-2 fw-light">®</sup> UAE has received, please contact info@Smarketing<sup className="font-2 fw-light">®</sup> UAE.</p> <p className="font-2"><strong>MODIFICATIONS OF THE PRIVACY POLICY.</strong> Smarketing<sup className="font-2 fw-light">®</sup> UAE. The Website Policies and Terms &amp; Conditions would be changed or updated occasionally to meet the requirements and standards. Therefore the Customers’ are encouraged to frequently visit these sections in order to be updated about the changes on the website. Modifications will be effective on the day they are posted.</p> 
            </div>
        </div>
    </div>



    <PolicyFooter/>



</div>
)
}
