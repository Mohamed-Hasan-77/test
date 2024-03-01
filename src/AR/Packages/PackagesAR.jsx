import { useState } from "react";
import "./packagesARStyle.scss"



import CallBackAR from './../CallBackAR/CallBackAR';

export default function PackagesAR() {


    const [requestCallBack, setRequestCallBack] = useState(false);

    const updateRequestCallBack = (newState) => {
        setRequestCallBack(newState);
    };

return <>

    <div className="packagesAR py-14">
        
        <div className="container">
    <div className="sectionTitle text-center my-15 mt-5">
        <h2 className="my-2">     باقات إعداد الشركات    </h2>

        <p style={{fontSize: "16px"}} className="text-gray-500 w-3/4 mx-auto">نقوم بتقييم متطلبات عملائنا ونقدم أكثر الأسعار عملية وتكلفة فعالة للبر الرئيسي والمناطق الحرة والخارجية.</p>
    </div>

    <div className="packagesCards flex flex-wrap mt-10">

        <div className="card w-full lg:w-1/3 mb-10 bg-mainLinearColor py-5 px-3 lg:rounded-s-xl shadow-md hover:scale-105 transition-all duration-500">
            <h3 className="mt-6 font-bold text-xl md:text-2xl text-center">باقة الأعمال الأساسية</h3>

            <div className="price text-center text-4xl">
                <p>AED 14,786</p>
                <p className="mt-3 text-lg lg:3xl">(4,050 USD)</p>
            </div>

            <p className="text-center text-gray-400 mt-10">مسموح بعدة مساهمين</p>

    

            <div className="w-full seperator"/>

            <ul>
                <li>ملكية 100%</li>
                <li>رخصة تجارية</li>
                <li>تأشيرة إقامة بالإمارات 01</li>
                <li>عدة مساهمين</li>
                <li>عدة أنشطة تجارية</li>
                <li>مساحة عمل مشتركة</li>
                <li>صندوق بريد مشترك</li>
                <li>مذكرة تأسيس (MOA)</li>
                <li>مكتب مرن وعقد إيجار</li>
            </ul>

            <div className="bottomCard">
                <div className="w-full seperator"/>

                <div className="btn text-center my-7">
                    <button onClick={()=> setRequestCallBack(!requestCallBack)} className="text-center bg-mainBackColor text-white py-2.5 px-10 w-full rounded-2xl text-xl">قدم الآن!</button>
                </div>

                <p className="text-sm text-center">تطبق الشروط والأحكام*</p>
            </div>
        </div>

        <div className="card midCard w-full lg:w-1/3 mb-10 py-5 px-3 lg:rounded-none rounded-xl shadow-md hover:scale-105 transition-all duration-500">
            <h3 className="mt-6 font-bold text-xl md:text-2xl text-center">باقات دبي الحرة للبداية السريعة</h3>

            <div className="price text-center text-mainBackColor text-4xl">
                <p>AED 21,900</p>
                <p className="mt-3 text-lg lg:3xl">(6,000 USD)</p>
            </div>

            <p className="text-center text-gray-700 mt-10 opacity-0">....</p>


            <div className="w-full seperator"/>

            <ul className="text-white">
                <li>ملكية 100%</li>
                <li>تأشيرات المستثمرين</li>
                <li>حزمة الإقامة في الإمارات 02</li>
                <li>عدة مساهمين</li>
                <li>عدة أنشطة تجارية</li>
                <li>مساحة عمل مشتركة مجانية</li>
                <li>صندوق بريد مشترك</li>
                <li>رسوم الترخيص</li>
                <li>رسوم الموافقة المسبقة</li>
                <li>بطاقة الهيئة</li>
                <li>تسجيل القناة الإلكترونية</li>
                <li>الفحص الطبي وبطاقة الهوية الإماراتية</li>
                <li>مكتب مرن وعقد إيجار مجاني</li>
                <li>مساعدة فتح حساب بنكي</li>
            </ul>

            <div className="bottomCard mt-24">
                <div className="w-full seperator"/>

                <div className="btn text-center my-7">
                    <button onClick={()=> setRequestCallBack(!requestCallBack)} className="text-center bg-mainBackColor text-white py-2.5 px-12 w-full rounded-2xl text-xl">قدم الآن!</button>
                </div>

                <p className="text-sm text-center">تطبق الشروط والأحكام*</p>
            </div>
        </div>

        <div className="card w-full lg:w-1/3 mb-10 bg-mainLinearColor py-5 px-3 lg:rounded-e-xl shadow-md hover:scale-105 transition-all duration-500">
            <h3 className="mt-6 font-bold text-2xl md:text-2xl text-center">باقة إعداد الأعمال في البر الرئيسي بدبي المخصصة</h3>

            <div className="price text-center text-4xl opacity-0">
                <p>AED</p>
                <p className="mt-3 text-lg lg:3xl">(USD)</p>
            </div>

            <p className="text-center text-gray-400 mt-10">ترخيص بملكية 100%</p>


            <div className="w-full seperator"/>

            <ul>
                <li>ملكية 100%</li>
                <li>رخصة تجارية تجارية</li>
                <li>بطاقة الهجرة</li>
                <li>تأشيرات الإقامة في دبي (للمستثمرين)</li>
                <li>ملف الحصة للموظفين 3</li>
                <li>مرافق العنوان الافتراضي</li>
                <li>تطبيق حصة الموظفين</li>
                <li>مجموعة واسعة من الأنشطة التجارية</li>
                <li>ختم الشركة</li>
                <li>مساعدة فتح حساب بنكي</li>
            </ul>

            <div className="bottomCard mt-24">
                <div className="w-full seperator"/>

                <div className="btn text-center my-7">
                    <button onClick={()=> setRequestCallBack(!requestCallBack)} className="text-center bg-mainBackColor text-white py-2.5 px-12 w-full rounded-2xl text-xl">قدم الآن!</button>
                </div>

                <p className="text-sm text-center">تطبق الشروط والأحكام*</p>
            </div>
        </div>

    </div>
</div>



    </div>


    <CallBackAR isOpen={requestCallBack}  updateState={updateRequestCallBack} />

    </>
}
