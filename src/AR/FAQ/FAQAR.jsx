import "./FAQARstyle.scss"
import ArrowDown from "../../assets/arrow-down-3101.svg"
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react"



export default function FAQAR() {

    const [scrollState, setScrollState] = useState(false);

    return (
    <div className="faqsAR">
        <div className="container">
            <div className="title">
                <h2 className="line-under"> الأسئلة الشائعة </h2>
            </div>    

    
<div className="flex justify-between items-center flex-wrap  ">

    <div className="text w-full lg:w-1/2 mt-20 lg:mt-0 ">

    <div className="m-2 space-y-5">


        <div className="group g1 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="1">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
                ما هو رخصة التجارة؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                    <p>
                    يُشار إليها أيضًا باسم رخصة الأعمال، رخصة التجارة هي وثيقة تحدد الأنشطة التي يمكن للشركة القيام بها في الإمارات.
                    </p>

                    <ul className="mt-4"> 
                        <li>رخصة مهنية - للمحترفين والحرفيين والفنانين</li>
                        <li>رخصة تجارية - لجميع الأنشطة التجارية</li>
                        <li>رخصة صناعية - لجميع الأنشطة الصناعية والتصنيعية</li>
                    </ul>

                </div>
        </div>


        <div className="group g2 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="2">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
            ما الوثائق التي أحتاجها لإنشاء شركتي؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                    <p>
                    قد تختلف المتطلبات اعتمادًا على الولاية القضائية التي ستنشئ شركتك فيها (المنطقة الحرة أو البر الرئيسي)، ولكن الوثائق الأساسية تشمل:
                    </p>

                    <ul className="mt-4"> 
                        <li>نسخة مصدقة من جوازات سفر المساهمين والمديرين</li> 
                        <li>نسخ جواز السفر</li>
                        <li>تفاصيل الأنشطة</li>
                        <li>صورة فوتوغرافية</li> 
                        <li>خيارات اسم التجارة</li>
                    </ul>

                </div>
        </div>


        <div className="group g3 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="3">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
            كيف أبدأ عملية الحصول على التأشيرة؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                    <p>
                        بمجرد إصدار رخصة التجارة الخاصة بك، ستتلقى بطاقة المؤسسة الخاصة بك (بعض الولايات القضائية تصدر البطاقة تلقائيًا، بينما تصدرها ولايات أخرى عند الطلب).
                    </p>

                    <p className="mt-4">
                    بعد إصدار بطاقة المؤسسة الخاصة بك، يمكنك المتابعة بتقديم طلب للحصول على تأشيرة. ستحتاج إلى تقديم الوثائق التالية:
                    </p>

                    <ul className="mt-4"> 
                        <li>نسخة من الجواز</li>
                        <li>صورة رقمية (حجم جواز السفر)</li> 
                        <li>تصريح دخول</li>
                        <li>حالة التأشيرة الحالية (اختياري لمن هم داخل البلاد بالفعل)</li>
                    </ul>

                </div>
        </div>


        <div className="group g4 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="4">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
            ما هي المنطقة الحرة؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                    <p>
                    المنطقة الحرة هي ولاية اقتصادية خاصة في الإمارات تقدم المزايا التجارية التالية:
                    </p>

                    <ul className="my-4"> 
                        <li>ملكية أجنبية كاملة للأعمال</li>
                        <li>إعادة تحويل الأرباح بنسبة 100%</li>
                        <li>ضريبة الدخل 0%</li>
                        <li>إعفاء من ضريبة الشركات (بشرط تحقيق معايير معينة)</li>
                        <li>عدم وجود رسوم جمركية على الواردات والصادرات</li>
                        <li>عدم الحاجة إلى رأس مال مدفوع مقدمًا (في معظم المناطق الحرة)</li>
                        <li>عدم الحاجة إلى مساحة مكتبية فعلية (اعتمادًا على المنطقة الحرة)</li>
                    </ul>

                    <p>
                        ومع ذلك، إذا كانت شركتك مسجلة في منطقة حرة، يمكنك التجارة فقط داخل تلك المنطقة الحرة ودوليًا. للتجارة في البر الرئيسي، ستحتاج إلى الحصول على إذن من سلطة المنطقة الحرة المعنية ودائرة التنمية الاقتصادية المحلية.                               
                    </p>

                </div>
        </div>


        <div className="group g5 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="5">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
            ما الفرق بين المنطقة الحرة والبر الرئيسي؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className=" drop invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                    <p>
                    كما ذكر أعلاه، لا يمكن للشركات في المنطقة الحرة التجارة والعمل إلا داخل المنطقة الحرة التي تم تسجيلها فيها وخارج البلاد. بالمقابل، يمكن للشركات في البر الرئيسي التجارة في أي مكان في الإمارات وخارج البلاد.
                    </p>

                    <ul className="mt-4"> 
                        <li>ملكية شركة أجنبية بنسبة 100% (في معظم الأنشطة)</li> 
                        <li>إعادة تحويل الأرباح بنسبة 100%</li> 
                        <li>ضريبة الدخل 0%</li> 
                        <li>الوصول إلى أكثر من 3000 نشاط تجاري</li>
                        <li>الحرية في التجارة في أي مكان في الإمارات وخارجها</li>
                        <li>القدرة على المشاركة في المناقصات والعقود الحكومية</li>
                        <li>الوصول إلى عدد غير محدود من التأشيرات</li>
                        <li>الموافقة السريعة على فتح حساب مصرفي</li> 
                    </ul>

                </div>
        </div>


        <div className="group g6 flex flex-col  bg-white rounded-2xl  shadow-lg   "  tabIndex="6">
            <div className="flex cursor-pointer group-focus:text-white group-focus:bg-mainBackColor  p-3 px-4 items-center  rounded-2xl justify-between">
                
            كم مرة أحتاج إلى تجديد رخصة التجارة الخاصة بي؟
                <img src={ArrowDown} className="h-4 w-4 transition-all duration-300 group-focus:-rotate-180" />

            </div>
                <div className="invisible  text-black h-auto max-h-0 items-center opacity-0 transition-all group-focus:p-5 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-300 duration-300" >
                تُجدد رخصة التجارة في البر الرئيسي سنويًا. أما رخصة المنطقة الحرة، فلها فترة صلاحية مختلفة تبعًا لسلطة المنطقة الحرة. وهذا يمكن أن يتراوح من سنة إلى خمس سنوات.
                </div>
        </div>


    </div>

</div>

<div className="achieveBoxes w-full lg:w-1/2 flex justify-center items-center flex-wrap py-5 ">

    <div className="aBox py-4  lg:p-4  w-full lg:w-1/2">
        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
        <ScrollTrigger duration={10} onEnter={() => setScrollState(true)} >
        <h3> 
            {scrollState && 
            
            <CountUp start={0} end={12}>
            </CountUp>
        }+ سنوات </h3>
        </ScrollTrigger>
            <p> نحن في الأعمال </p>
        </div>
    </div>

    <div className="aBox py-4  lg:p-4 w-full lg:w-1/2">
        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
            {/* <h3> 25,000 + </h3> */}

            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                <h3> 
                    {scrollState && 
                    
                    <CountUp start={0} end={25000}>
                    </CountUp>
                    } +  
                </h3>
            </ScrollTrigger>
            <p>الشركات التي ساعدنا على إنشائها </p>
        </div>
    </div>

    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
            {/* <h3> 40,000 + </h3> */}

            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                <h3> 
                    {scrollState && 
                    
                    <CountUp start={0} end={40000}>
                    </CountUp>
                    } +  
                </h3>
            </ScrollTrigger>
            <p> العملاء حول العالم </p>
        </div>
    </div>

    <div className="aBox  py-4  lg:p-4 w-full lg:w-1/2">
        <div className="innerAbox text-white rounded-3xl bg-mainBackColor flex justify-center items-center flex-col space-y-3">
            {/* <h3> 40   </h3> */}

            <ScrollTrigger  onEnter={() => setScrollState(true)} >
                <h3> <span className="ml-1"> ساعة </span>
                    {scrollState && 
                    
                    <CountUp start={0} end={40}>
                    </CountUp>
                    }   
                </h3>
            </ScrollTrigger>

            <p>  تم تحريرها من العمل الإداري لعملائنا شهريًا </p>
        </div>
    </div>


</div>
</div>



        </div>   
    </div>
)
}
