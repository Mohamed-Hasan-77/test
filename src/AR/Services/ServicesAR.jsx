import ServBox from "./ServBox/ServBoxAR"
import "./servicesStyleAR.scss"

import img1 from "../../assets/company-formation-and-trade-license.svg"
import img2 from "../../assets/visa-immigration-services.svg"
import img3 from "../../assets/ico-no-corporate-tax.svg"
import img4 from "../../assets/corporate-bank-account-access.svg"
import img5 from "../../assets/vip-emirates-id-and-medical-services.svg"
import img6 from "../../assets/no-local-employee-quota.svg"
import { useState } from "react"


import XphoneImg from "../../assets/ClosePhone.svg"
import logoImg from "../../assets/smart-zones-uae-business-setup-logo.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';




export default function ServicesAR() {

    const [requestCallBack, setRequestCallBack] = useState(false);


    let boxesData = [ 
        {   
            img : img1,
            boxTitle: "تأسيس الشركات ورخصة التجارة",
            description: `نحن خبراء في مساعدتك على بدء شركة في الإمارات العربية المتحدة، سواء كان ذلك في البر الرئيسي أو في منطقة حرة أو خارجية. سنرشدك خلال كل شيء، من اختيار أفضل نوع من الأعمال إلى الحصول على جميع التراخيص والتصاريح التي تحتاجها.`
        },
        {   
            img : img2,
            boxTitle: "خدمات التأشيرات والهجرة",
            description: `تقدم سماركتينج ® الإمارات العربية المتحدة مساعدة في عملية التقديم للحصول على الفيزا الذهبية للإمارات، وهي برنامج إقامة طويل الأجل للمستثمرين ورواد الأعمال والأفراد ذوي الثروات الكبيرة.`
        },
        {   
            img : img3,
            boxTitle: "استشارات ضريبة القيمة المضافة والضرائب الشركات",
            description: `تقدم سماركتينج ® الإمارات العربية المتحدة خدمات استشارية شاملة لضريبة القيمة المضافة والضرائب الشركات في دبي. نحن نوفر النصائح والإرشادات الخبراء للشركات التي تنقل المشهد الضريبي المعقد.`
        },
        {   
            img : img4,
            boxTitle: "مساعدة في فتح حساب بنكي",
            description: `تفخر دبي بتقديم خدمات VIP للحصول على الهوية الإماراتية وبطاقات الخدمات الطبية، مما يسرع عملية التقديم. يضمن فريقنا المخصص تجربة سلسة، مما يقلل من الوقت والجهد اللازمين للحصول على هذه الوثائق الأساسية.`
        },
        {   
            img : img5,
            boxTitle: "خدمات VIP للهوية الإماراتية والخدمات الطبية",
            description: `تفخر دبي بتقديم خدمات VIP للحصول على الهوية الإماراتية وبطاقات الخدمات الطبية، مما يسرع عملية التقديم. يضمن فريقنا المخصص تجربة سلسة، مما يقلل من الوقت والجهد اللازمين للحصول على هذه الوثائق الأساسية.`
        },
        {   
            img : img6,
            boxTitle: "خدمات الكونسيرج / PRO",
            description: `يتعامل فريق خدمات الكونسيرج / PRO مع جميع المهام المتعلقة بالحكومة، مثل التجديدات، وإزالة الوثائق والتصديق عليها، والتسجيل لصندوق بريد ونقل رخصة القيادة. بهذه الطريقة، يمكنك التركيز على نمو عملك دون القلق بشأن هذه العمليات القانونية.`
        }
    
    ]
    




    return <>
    
    
    <div className="servicesAR">

        <div className="container">
                <h2>
                    <span className="under-line"> خدمات </span> إعداد الأعمال
                    <span className="textMainColor"> الشاملة </span> لدينا
                </h2>



                <div className="sevBoxes flex justify-between flex-wrap">


                    {boxesData.map((data, idx) => {
                        return <ServBox key={idx} theImg={data.img} theTitle={data.boxTitle} description={data.description}   />
                    } )}

                    


                </div>


                <div className="btn text-center">
                    <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-white text-xl mt-12 "> 
                        اتصل بنا  
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
                        <p className="  text-xl w-full text-center">We offer licences that support </p>
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
