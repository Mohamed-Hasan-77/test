import "./StartYourJourneyStyleAR.scss"
import MrAhmed from "../../assets/Mr Ahmed.jpg"

import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/smart-zones-uae-business-setup-logo.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


import ImgComponent from '../imgComponent/ImgComponentAR'

import { useState } from "react";


export default function StartYourJourneyAR() {

    const [requestCallBack, setRequestCallBack] = useState(false);



    return <>
    <div className="StartYourJourneyAR bg-white py-32">

        <div className="container flex justify-between flex-wrap overflow-hidden lg:overflow-visible">


            <ImgComponent myImg={MrAhmed} degree="-125deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3 className=" ">
                دعنا نساعدك في بدء
                <span className="textMainColor"> <span className="under-line textMainColor"> رحلتك  نحو </span> النجاح. </span>
                </h3>

                <p>
                مرحبًا بكم في سماركتينج
                <sup className="font-2 fw-light">®</sup>
                مستشاري إنشاء الأعمال في الإمارات، وجهتك الشاملة لتلبية جميع متطلبات إنشاء عملك في الإمارات. نحن نوفر مجموعة شاملة من الخدمات المصممة لمعالجة جميع جوانب احتياجات إعداد عملك. بفريقنا من المتخصصين في تأسيس الشركات، نقدم الإرشاد طوال العملية بأكملها، مغطين مهام مثل تسجيل الشركة، الحصول على التراخيص، معالجة التأشيرات، الوثائق القانونية، فتح حساب بنكي، إعداد المكتب، والمزيد.
                </p>

                <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-white text-xl mt-7">
                    طلب معاودة الاتصال
                </button>
            </div>

        </div>
        
    </div>




<div className={`requestCallback   ${requestCallBack == false ? "invisible opacity-0 hidden "  :  "visible opacity-1 flex"  } `}>

<div className={`requestBox  `}>

<img onClick={()=> setRequestCallBack(!requestCallBack)} src={XphoneImg} width={16} className='closeRequest' alt="XImg"  />

    <form>
        <div className="flex flex-wrap  ">
            <div className="w-full ">

                <div className="title text-white">

                  <div className="logo flex justify-center mb-3">
                    <img  src={logoImg} className='w-24'  alt="logo"/>
                  </div>
                  <p className="  text-xl w-full text-center">We offer licences that support  </p>
                  <p className="  text-xl w-full text-center"> your business in UAE </p>
                  <p className="my-5  text-xl w-full text-center"> Get a Call-Back in 50 seconds </p>
                </div>

                <label htmlFor="first_name" className="block mb-2 text-white text-sm font-medium  ">Your name (required) </label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
            </div>

            <div className="w-full mt-5">
                <label htmlFor="phone" className="block mb-2 text-white text-sm font-medium  ">Your Phone Number (required)</label>
                {/* <input type="tel" id="phone"  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /> */}
                <PhoneInput country={'eg'} inputProps={{  required: true,  }} className="bg-gray-50   text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-1  "/>
            </div>

            <div className="w-full mt-5">
                <label htmlFor="email" className="block mb-2 text-white text-sm font-medium  ">Your email address </label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "  required />
            </div>  

            <div className="w-full mt-5">
                <label htmlFor="website" className="block mb-2 text-white text-sm font-medium  "> Message (Optional)</label>
                <input type="url" id="website" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  "   />
            </div>

            <button type="submit" className="text-white bg-green-700 hover:bg-black transition-colors w-full rounded-lg px-5 py-2.5 text-center mt-5 text-xl"> Call Me !</button>

        </div>

    </form>

</div>

</div>


</>
}
