import ServBox from "./ServBox/ServBoxAR"
import "./servicesStyleAR.scss"

import img1 from "../../assets/company-formation-and-trade-license.svg"
import img2 from "../../assets/visa-immigration-services.svg"
import img3 from "../../assets/ico-no-corporate-tax.svg"
import img4 from "../../assets/corporate-bank-account-access.svg"
import img5 from "../../assets/vip-emirates-id-and-medical-services.svg"
import img6 from "../../assets/no-local-employee-quota.svg"
import { useState } from "react"



import CallBackAR from "../CallBackAR/CallBackAR"




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
            description: `تقدم اس ماركتينج ® الإمارات العربية المتحدة مساعدة في عملية التقديم للحصول على الفيزا الذهبية للإمارات، وهي برنامج إقامة طويل الأجل للمستثمرين ورواد الأعمال والأفراد ذوي الثروات الكبيرة.`
        },
        {   
            img : img3,
            boxTitle: "استشارات ضريبة القيمة المضافة والضرائب الشركات",
            description: `تقدم اس ماركتينج ® الإمارات العربية المتحدة خدمات استشارية شاملة لضريبة القيمة المضافة والضرائب الشركات في دبي. نحن نوفر النصائح والإرشادات الخبراء للشركات التي تنقل المشهد الضريبي المعقد.`
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
    

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };


    return <>
    
    
    <div className="servicesAR">

        <div className="container">
                <h2>
                    <span className="under-lineAR"> خدمات </span> إعداد الأعمال
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
    
    
        



    <CallBackAR isOpen={requestCallBack}  updateState={updateRequestCallBack} />



</>


}
