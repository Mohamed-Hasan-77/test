import "./UAEDifferentStyleAR.scss"
import MrAmr from "../../assets/img.jpeg"
import ImgComponent from '../imgComponent/ImgComponentAR'

import pointImg from "../../assets/تنزيل (2).svg"
import ArrowDown from "../../assets/arrow-down-3101.svg"



import { useState } from "react"
import CallBackAR from "../CallBackAR/CallBackAR"



export default function UAEDifferentAR() {


    const [requestCallBack, setRequestCallBack] = useState(false);

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };

    return <>
    <div className="UAEDifferentAR bg-white py-24 pt-10">

        <div className="container flex  items-center justify-between flex-wrap overflow-hidden lg:overflow-visible">



            <ImgComponent myImg={MrAmr} degree="285deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3>
                ما الذي يميز 
                <span className="textMainColor"> <span className="under-lineAR textMainColor"> اس ماركتينج </span><sup className="font-2 fw-light textMainColor">®</sup> الإمارات؟ </span>
                </h3>

                <div className="m-2 space-y-5">

                    <div className="group g1 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="1">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> سريع وفعّال </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            نقدم أسعار تنافسية وخيارات فعّالة من حيث التكلفة، مما يتيح لعملائنا توفير المال دون التضحية بجودة الخدمة التي يتلقونها.
                        </div>
                    </div>

                    <div className="group g2 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="2">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> حلول فعّالة من حيث التكلفة </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            نقدم أسعار تنافسية وخيارات فعّالة من حيث التكلفة، مما يتيح لعملائنا توفير المال دون التضحية بجودة الخدمة التي يتلقونها.
                        </div>
                    </div>

                    <div className="group g3 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="3">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> المساعدة متعددة اللغات </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            أعضاء فريقنا يتقنون عدة لغات، بما في ذلك الإنجليزية والعربية والهندية والمزيد، مما يسهل التواصل السلس للعملاء من خلفيات متنوعة.
                        </div>
                    </div>

                    <div className="group g4 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="4">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> معرفة خبيرة </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            فريقنا يمتلك معرفة واسعة بمشهد الأعمال في الإمارات العربية المتحدة، بما في ذلك المتطلبات القانونية والتنظيمية لإنشاء الأعمال في الإمارات.
                        </div>
                    </div>

                    <div className="group g5 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="5">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> متجر شامل لجميع الخدمات </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            بصفتنا متجرًا شاملاً، نغطي جميع جوانب إعداد الأعمال، من الترخيص والتصاريح إلى مساحة المكتب والخدمات المصرفية، مما يبسط العملية لعملائنا من خلال توفير كل شيء في مكان واحد.
                        </div>
                    </div>

                    <div className="group g6 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="6">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> شبكة قوية </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            بفضل شبكة قوية من الشركاء ومقدمي الخدمات في الإمارات، نقدم مجموعة متنوعة من الخدمات والموارد التجارية لعملائنا.
                        </div>
                    </div>

                    <div className="group g7 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="7">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> حلول مصممة خصيصًا </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            يتضمن نهجنا تصميم حلول مخصصة لتلبية المتطلبات الفريدة لكل عميل، مما يضمن عملية إعداد الأعمال سلسة وخالية من الضغوط.
                        </div>
                    </div>

                    <div className="group g8 flex flex-col bg-white rounded-2xl shadow-lg" tabIndex="8">
                        <div className="flex cursor-pointer group-focus:bg-mainBackColor p-3 text-slate-800 px-4 items-center rounded-2xl justify-between">
                            <span className="flex items-center group-focus:text-white"> <img src={pointImg} className="ml-2 w-6" alt="point" /> دعم العملاء المتميز </span>
                            <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />
                        </div>
                        <div className="invisible text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                            ملتزمون بالتميز، يلتزم فريقنا بتوفير خدمة عملاء ودعم استثنائيين طوال رحلة إعداد الأعمال بأكملها، مما يضمن شعور عملائنا بالثقة والاطلاع في كل مرحلة.
                        </div>
                    </div>

                </div>

                <button onClick={()=> setRequestCallBack(!requestCallBack)} className="px-7 py-2.5 rounded-full bg-mainBackColor text-xl mt-7 text-white"> 
                    طلب معاودة الاتصال!
                </button>
            </div>


        </div>
        
    </div>



    <CallBackAR isOpen={requestCallBack}  updateState={updateRequestCallBack} />



    </>
}
