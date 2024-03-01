import "./StartYourJourneyStyleAR.scss"
import MrAhmed from "../../assets/Mr Ahmed.jpg"




import ImgComponent from '../imgComponent/ImgComponentAR'

import { useState } from "react";
import CallBackAR from "../CallBackAR/CallBackAR";


export default function StartYourJourneyAR() {

    const [requestCallBack, setRequestCallBack] = useState(false);

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };


    return <>
    <div className="StartYourJourneyAR bg-white py-16 lg:py-28 ">

        <div className="container flex justify-between flex-wrap overflow-hidden lg:overflow-visible">


            <ImgComponent myImg={MrAhmed} degree="-125deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3 className=" ">
                دعنا نساعدك في بدء
                <span className="textMainColor"> <span className="under-lineAR textMainColor"> رحلتك  نحو </span> النجاح. </span>
                </h3>

                <p>
                مرحبًا بكم في اس ماركتينج
                <sup className="font-2 fw-light">®</sup>
                مستشاري إنشاء الأعمال في الإمارات، وجهتك الشاملة لتلبية جميع متطلبات إنشاء عملك في الإمارات. نحن نوفر مجموعة شاملة من الخدمات المصممة لمعالجة جميع جوانب احتياجات إعداد عملك. بفريقنا من المتخصصين في تأسيس الشركات، نقدم الإرشاد طوال العملية بأكملها، مغطين مهام مثل تسجيل الشركة، الحصول على التراخيص، معالجة التأشيرات، الوثائق القانونية، فتح حساب بنكي، إعداد المكتب، والمزيد.
                </p>

                <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-white text-xl mt-7">
                    طلب معاودة الاتصال
                </button>
            </div>

        </div>
        
    </div>




    <CallBackAR isOpen={requestCallBack}  updateState={updateRequestCallBack} />



</>
}
