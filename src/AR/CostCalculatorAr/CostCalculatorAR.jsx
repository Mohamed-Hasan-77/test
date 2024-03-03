import { useRef, useState } from "react"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import BtnNext from "./btnNext";
import BtnBack from "./btnBack";
import "./CostCalcAR.scss"
import axios from "axios";

export default function CostCalculatorAR() {


    const  [firstSlide, setFirstSlide] = useState(true)
    const  [secondSlide, setSecondSlide] = useState(false)
    const  [ThirdSlide, setThirdSlide] = useState(false)
    const  [FourthSlide, setFourthSlide] = useState(false)
    const  [FifthSlide, setFifthSlide] = useState(false)
    const  [SixthSlide, setSixthSlide] = useState(false)
    const  [SeventhSlide, setSeventhSlide] = useState(false)
    const  [EighthSlide, setEighthSlide] = useState(false)
    const  [NinthSlide, setNinthSlide] = useState(false)
    const  [TenthSlide, setTenthSlide] = useState(false)
    const [wrongData, setWrongData ] = useState("");
    const [phoneNumber, setPhoneNumber ] = useState("");

    function handlePhoneNumber (value) { 
        setPhoneNumber(value)
    }

    const nameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const emailInputRef = useRef(null);


    
    
    const categorySelect = useRef(null);
    

    // select Zone 
    const MainlandRef = useRef(null);
    const FreeZoneRef = useRef(null);
    const NotSureRef = useRef(null);


    // Select Activity number 
    const ActivitesSelectRef = useRef(null);

    
    // Select ShareHolders number 
    const ShareHoldersSelectRef = useRef(null);

    // Select Visas number 
    const VisasSelectRef = useRef(null);


    //  Have a BUSINESS PLAN ? 
    const YesBUSINESSPLAN = useRef(null);
    const NoBUSINESSPLAN = useRef(null);
    
    

    //  Living In UAE  ? 
    const LivingInUAE = useRef(null);
    const NoLivingInUAE = useRef(null);

    //  when to start  ? 
    const StartImmediatelyRef = useRef(null);
    const StartNextMonthRef = useRef(null);
    const UndecidedMonthRef = useRef(null);



    function SlideForward1() {

        let   emailRegExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;

        if (nameInputRef.current.value  !== "" && lastNameInputRef.current.value  !== "" && emailRegExp.test(emailInputRef.current.value)  && phoneNumber  !== "" ){
            setFirstSlide(false)
            setSecondSlide(true)
            setWrongData("")
        } else {
            setWrongData(" الرجاء إدخال بيانات صحيحة")
        }

    }


    function SlideForward2() {

        if (categorySelect.current.value  !== ""  ){
            setSecondSlide(false)
            setThirdSlide(true)
            setWrongData("")
        } else {
            setWrongData(" رجاء اختر اجابة ")
        }

    }

    function SlideForward3() {


        if (MainlandRef.current.checked  || FreeZoneRef.current.checked || NotSureRef.current.checked  ){
            setThirdSlide(false)
            setFourthSlide(true)
            setWrongData("")
        } else {
            setWrongData(" رجاء اختر إجابة ")
        }


    }

    function SlideForward4() {

        if (ActivitesSelectRef.current.value  !== ""  ){
            setFourthSlide(false)
            setFifthSlide(true)
            setWrongData("")
        } else {
            setWrongData("رجاء اختر إجابة   ")
        }

    }

    function SlideForward5() {

        if (ShareHoldersSelectRef.current.value  !== ""  ){
            setFifthSlide(false)
            setSixthSlide(true)
            setWrongData("")
        } else {
            setWrongData("رجاء اختر إجابة    ")
        }

    }

    function SlideForward6() {

        if (VisasSelectRef.current.value  !== ""  ){
            setSixthSlide(false)
            setSeventhSlide(true)
            setWrongData("")
        } else {
            setWrongData("رجاء اختر إجابة     ")
        }

    }

    function SlideForward7() {

        if (YesBUSINESSPLAN.current.checked  || NoBUSINESSPLAN.current.checked   ){
            setSeventhSlide(false)
            setEighthSlide(true)
            setWrongData("")
        } else {
            setWrongData(" رجاء اختر اجابة   ")
        }


    }

    function SlideForward8() {
        if (LivingInUAE.current.checked  || NoLivingInUAE.current.checked  ){
            setEighthSlide(false)
            setNinthSlide(true)
            setWrongData("")
        } else {
            setWrongData(" رجاء اختر اجابة   ")
        }

    }

    function SlideForward9() {

        let checkedInput = ""

        let ele = document.querySelectorAll('.ANNUALTURNOVERradioInputs input ');
            for (let i = 0; i < ele.length; i++) {
                if (ele[i].checked == true )
                    checkedInput = ele[i]
            }
    if (checkedInput  !== ""  ){
            setNinthSlide(false)
            setTenthSlide(true)
            setWrongData("")
        } else {
            setWrongData("رجاء اختر إجابة  ")
        }
    }

    function SlideForward10() {

        if (StartImmediatelyRef.current.checked  || StartNextMonthRef.current.checked || UndecidedMonthRef.current.checked  ){
            setWrongData("")


            storeData()


        } else {
            setWrongData(" الرجاء إدخال بيانات صحيحة")
        }

    }


    function slideBack1() {
        setSecondSlide(false)
        setFirstSlide(true)
        setWrongData("")
    }

    function slideBack2() {
        setThirdSlide(false)
        setSecondSlide(true)
        setWrongData("")
    }

    function slideBack3() {
        setFourthSlide(false)
        setThirdSlide(true)
        setWrongData("")
    }

    function slideBack4() {
        setFifthSlide(false)
        setFourthSlide(true)
        setWrongData("")
    }

    function slideBack5() {
        setSixthSlide(false)
        setFourthSlide(true)
        setWrongData("")
    }

    function slideBack6() {
        setSeventhSlide(false)
        setSixthSlide(true)
        setWrongData("")
    }

    function slideBack7() {
        setEighthSlide(false)
        setSeventhSlide(true)
        setWrongData("")
    }

    function slideBack8() {
        setNinthSlide(false)
        setEighthSlide(true)
        setWrongData("")
    }

    function slideBack9() {
        setTenthSlide(false)
        setNinthSlide(true)
        setWrongData("")
    }




    async function sendData(FormData) {

        // try and catch if you are not sure if there will be an error with api 
        try {
        let { data } = await axios.post( "https://sheetdb.io/api/v1/mwljjenpvqj5v", FormData );
    
        // catch the error 
        } catch(err) {
            // console.log(err.response);
            
            alert("something Wrong happened please try again")
    
        }
    
        }


    const handleSubmit = (event) => {

        event.preventDefault();

}




function storeData() {
    let FormData = {}



    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;

    // store User Data 

    // store  Data 
    FormData.Fname = nameInputRef.current.value;
    FormData.lastName = lastNameInputRef.current.value;
    FormData.Name = nameInputRef.current.value + " " + lastNameInputRef.current.value;
    FormData.Email = emailInputRef.current.value;
    FormData.Phone = phoneNumber;
    FormData.BusinessCategory = categorySelect.current.value;
    FormData["Date"] = currentDate;

    if (MainlandRef.current.checked){
        FormData.preferredJurisdiction = "Mainland";
    } else if(FreeZoneRef.current.checked) {
        FormData.preferredJurisdiction = "FreeZone";
    } else if(NotSureRef.current.checked) {
        FormData.preferredJurisdiction = "NotSure";
    }

    FormData.ActivitesNumber = ActivitesSelectRef.current.value;
    FormData.ShareHoldersNumber = ShareHoldersSelectRef.current.value;
    FormData.VisasNumber = VisasSelectRef.current.value;

    if (YesBUSINESSPLAN.current.checked ){
        FormData.BUSINESSPLAN = "Yes";
    } else if(NoBUSINESSPLAN.current.checked) {
        FormData.BUSINESSPLAN = "No";
    }

    if (LivingInUAE.current.checked ){
        FormData.InUAE = "Yes";
    } else if(NoLivingInUAE.current.checked) {
        FormData.InUAE = "No";
    }



    let ele = document.querySelectorAll('.ANNUALTURNOVERradioInputs input ');
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked == true )
            FormData.AnnualTurnover = ele[i].value
        }


    if (StartImmediatelyRef.current.checked){
        FormData.start = "Immediately";
    } else if(StartNextMonthRef.current.checked) {
        FormData.start = "Next Month";
    } else if(UndecidedMonthRef.current.checked) {
        FormData.start = "Undecided";
    }

    sendData(FormData)

    let loader = document.querySelector(".loader")
    let submitArrow = document.querySelector(".submitArrow")

    submitArrow.classList.add("hidden")
    loader.classList.remove("hidden")

    setTimeout(() => {
        submitArrow.classList.remove("hidden")
        loader.classList.add("hidden")
        window.location.assign("./")
    }, 1000)
}



    return (
    <div className="CostCalculatorAR flex flex-wrap">
        
        <div className="leftContent w-full lg:w-2/3 lg:h-screen px-7 lg:px-14 pb-40 lg:pb-0 flex flex-col justify-center order-1 lg:order-none mt-14 lg:mt-0">
            
            <form onSubmit={handleSubmit} className="relative w-full   " >

                <div className={`firstSlide transition-all duration-300   ${firstSlide == false ? "opacity-0  absolute  -translate-y-full top-5555 " : "translate-y-0"} `}>
                    
                    <div className="title">
                        <h2 className="textMainColor"> بيانات الاتصال </h2>
                        <p className="my-5"> الرجاء إدخال بياناتك للحصول على تقدير تكلفة إعداد عملك على الشاشة التالية. سنرسل أيضًا العرض التقديري عبر البريد الإلكتروني. </p>
                    </div>


                        {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }
                    <div className="inputs flex flex-wrap w-full lg:w-2/3  ">

                        <div className=" mt-5 px-3 w-full lg:w-1/2">
                        <input type="text"  placeholder=" الاسم الاول" className="bg-gray-50 border border-gray-300   rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2 "   ref={nameInputRef}  required />
                        </div>  

                        <div className=" mt-5 px-3 w-full lg:w-1/2">
                        <input type="text" placeholder=" الاسم الثاني "  className="bg-gray-50 border border-gray-300   rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={lastNameInputRef}   required />
                        </div>  


                        <div className=" mt-5 px-3 w-full lg:w-1/2">
                            <input type="email"  placeholder=" الايميل" className="bg-gray-50 border border-gray-300   rounded-lg focus:shadow-inputFocus focus:border-none focus:outline-none block w-full p-2  " ref={emailInputRef}   required />
                        </div>  

                        <div className=" mt-5 px-3 w-full lg:w-1/2">
                            <PhoneInput country={'us'} inputProps={{  required: true,  }} style={{width: "100%"}} className=" border border-gray-300 ltr   rounded-lg focus:shadow-inputFocus  focus:border-none focus:outline-none block w-full p-1  " onChange={handlePhoneNumber} value={phoneNumber }   />
                        </div>
                    </div>



                    <div className="btns flex space-x-5 mt-12 gap-5">
                        <button  className="bg-transparent py-3 border-gray-200 border shadow px-10 flex justify-center items-center space-x-2  rounded-2xl text-gray-500 cursor-default ">
                            <svg width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg> 
                            السابق
                        </button>

                        <BtnNext forward={SlideForward1}/>
                    </div>

                </div>


                <div className={`seconedSlide transition-all duration-300   ${secondSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                            <h2 className="textMainColor"> اختر فئة عملك </h2>
                            <p className="my-5"> اختر الفئة التي تصف عملك بأفضل شكل. </p>
                        </div>


                        {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap ">

                            <select ref={categorySelect} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 ">
                                    <option value=""> —Please choose an option—</option>
                                    <option value="Events/Exhibition Organizers">Events/Exhibition Organizers</option>
                                    <option value="Accounting">Accounting</option>
                                    <option value="Advertising">Advertising</option>
                                    <option value="Agricultural">Agricultural</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Brokerage">Brokerage</option>
                                    <option value="Consultancy - IT">Consultancy - IT</option>
                                    <option value="Consultancy - Marketing">Consultancy - Marketing</option>
                                    <option value="Consultancy - HR">Consultancy - HR</option>
                                    <option value="Consultancy - Maritime">Consultancy - Maritime</option>
                                    <option value="Consultancy - Management">Consultancy - Management</option>
                                    <option value="Consultancy - Aviation">Consultancy - Aviation</option>
                                    <option value="Consultancy - Finance">Consultancy - Finance</option>
                                    <option value="Consultancy - Logistics">Consultancy - Logistics</option>
                                    <option value="Consultancy - Media">Consultancy - Media</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle Coaching">Lifestyle Coaching</option>
                                    <option value="Production - Art/Video/Photography/Graphic Design">Production - Art/Video/Photography/Graphic Design</option>
                                    <option value="Events/Exhibition Organizers">Events/Exhibition Organizers</option>
                                    <option value="General Trading">General Trading</option>
                                    <option value="Trading - Garments">Trading - Garments</option>
                                    <option value="Trading - Furniture">Trading - Furniture</option><option value="Trading - Building Materials">Trading - Building Materials</option>
                                    <option value="Trading - Foodstuff">Trading - Foodstuff</option><option value="Trading - Automobile">Trading - Automobile</option>
                                    <option value="Trading - Electronics">Trading - Electronics</option><option value="Sports">Sports</option>
                                    <option value="Customer Care Center">Customer Care Center</option><option value="Other - please specify">Other - please specify</option>
                            </select>
                        </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">

                            <BtnBack Backward={slideBack1}/>
                            <BtnNext forward={SlideForward2}/>

                        </div>


                </div>


                <div className={`ThirdSlide transition-all duration-300   ${ThirdSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                            <h2 className="textMainColor"> اختر المنطقة القانونية والتنظيمية المفضلة لديك </h2>
                            <p className="my-5"> اختر بناءً على نوع نشاطك التجاري وما إذا كنت بحاجة إلى أن تكون مقرًا في البر الرئيسي أم لا </p>
                        </div>

                        {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap ">

                            <div className="flex items-center gap-5 radioInputs">
                                <div>
                                        <input type="radio" name="option" id="1" value="1" className="peer hidden" ref={MainlandRef}  />
                                        <label htmlFor="1" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > البر الرئيسي</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="option" id="2" value="2" className="peer hidden" ref={FreeZoneRef} />
                                        <label htmlFor="2" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" >المنطقة الحرة</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="option" id="3" value="3" className="peer hidden" ref={NotSureRef} />
                                        <label htmlFor="3" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" >غير متأكد</label>
                                    </div>


                                </div>
                            </div>


                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack2}/>
                            <BtnNext forward={SlideForward3}/>
                        </div>


                </div>


                <div className={`FourthSlide transition-all duration-300   ${FourthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                            <h2 className="textMainColor "> عدد الأنشطة </h2>
                            <p className="my-5"> اختر عدد الأنشطة التجارية التي تحتاجها: </p>
                        </div>

                        {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap ">

                            <select ref={ActivitesSelectRef} id="countries" className="bg-gray-200 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 0">
                                    <option value=""> —Please choose an option—</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 Or More ">5 Or More </option>
                            </select>
                        </div>

                    <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack3}/>
                            <BtnNext forward={SlideForward4}/>
                    </div>
                </div>


                <div className={`FifthSlide transition-all duration-300   ${FifthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                            <div className="title">
                                <h2 className="textMainColor "> كم عدد المساهمين في شركتك؟ </h2>
                                <p className="my-5"> سيساعد عدد المساهمين في تحديد الإعداد الأنسب لعملك. </p>
                            </div>

                            {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                            }

                            <div className="inputs flex flex-wrap ">

                                <select ref={ShareHoldersSelectRef} id="countries" className="bg-gray-200 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2 0">
                                        <option value=""> —Please choose an option—</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5 Or More ">5 Or More </option>
                                </select>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack4}/>
                            <BtnNext forward={SlideForward5}/>
                        </div>


                </div>


                <div className={`SixthSlide transition-all duration-300   ${SixthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                            <div className="title">
                                <h2 className="textMainColor "> كم عدد التأشيرات التي ستحتاجها؟ </h2>
                                <p className="my-5"> يجب أن يشمل عدد التأشيرات التي ستحتاجها تأشيرتك الخاصة (إذا لزم الأمر) وتأشيرات عدد الموظفين الذين تخطط لتوظيفهم خلال العام القادم. </p>
                            </div>

                            {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                            <div className="inputs flex flex-wrap ">
                                <select ref={VisasSelectRef} id="countries" className="bg-gray-200 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2 0">
                                        <option value=""> —Please choose an option—</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 </option>
                                        <option value="6">6 </option>
                                </select>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack5}/>
                            <BtnNext forward={SlideForward6}/>
                        </div>


                </div>

                <div className={`SeventhSlide transition-all duration-300   ${SeventhSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>


                        <div className="title">
                            <h2 className="textMainColor "> هل لديك خطة عمل؟ </h2>
                        </div>

                            {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 my-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                            }

                        <div className="inputs flex flex-wrap mt-5 ">

                            <div className="flex items-center space-x-3 radioInputs gap-5 mr-5">
                                <div>
                                        <input type="radio" name="BUSINESSPLAN" id="YES" value="YES" className="peer hidden" ref={YesBUSINESSPLAN}  />
                                        <label htmlFor="YES" className="block cursor-pointer select-none rounded py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > نعم </label>
                                    </div>

                                    <div>
                                        <input type="radio" name="BUSINESSPLAN" id="NO" value="NO" className="peer hidden" ref={NoBUSINESSPLAN} />
                                        <label htmlFor="NO" className="block cursor-pointer select-none rounded py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > لا </label>
                                    </div>

                                </div>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack6}/>
                            <BtnNext forward={SlideForward7}/>
                        </div>


                </div>

                <div className={`EighthSlide transition-all duration-300   ${EighthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                                <h2 className="textMainColor " > هل أنت مقيم حاليًا في دولة الإمارات العربية المتحدة؟ </h2>
                            </div>


                            {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 my-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap mt-5 ">

                            <div className="flex items-center gap-5 radioInputs">
                                <div>
                                        <input type="radio" name="LivingInUAE" id="YESUAE" value="YES IN THE UAE" className="peer hidden" ref={LivingInUAE}  />
                                        <label htmlFor="YESUAE" className="block cursor-pointer select-none rounded py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > نعم </label>
                                    </div>

                                    <div>
                                        <input type="radio" name="LivingInUAE" id="NOUAE" value="Not IN THE UAE " className="peer hidden" ref={NoLivingInUAE} />
                                        <label htmlFor="NOUAE" className="block cursor-pointer select-none rounded py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > لا </label>
                                    </div>

                                </div>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack7}/>
                            <BtnNext forward={SlideForward8}/>
                        </div>


                </div>


                <div className={`NinthSlide transition-all duration-300   ${NinthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                            <h2 className="textMainColor"> الدوران السنوي </h2>
                            <p className="my-5"> الدوران السنوي الحالي أو المتوقع لعملك في الاثني عشر شهرًا القادمة. </p>
                        </div>


                            {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 my-4  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap mt-5 ">

                            <div className="flex items-center flex-wrap  radioInputs ANNUALTURNOVERradioInputs w-3/4">
                                    <div className="w-1/2 p-2 ">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL1" value="AED 20,000 - 100,000" className="peer hidden"   />
                                        <label htmlFor="ANNUAL1" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 20,000 - 100,000 </label>
                                    </div>

                                    <div className="w-1/2 p-2">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL2" value="AED 100,000 - 250,000" className="peer hidden"   />
                                        <label htmlFor="ANNUAL2" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 100,000 - 250,000 </label>
                                    </div>

                                    <div className="w-1/2 p-2">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL3" value=" AED 250,000 - 500,000" className="peer hidden"   />
                                        <label htmlFor="ANNUAL3" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 250,000 - 500,000 </label>
                                    </div>

                                    <div className="w-1/2 p-2">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL4" value=" AED 500,000 - 1,000,000" className="peer hidden"   />
                                        <label htmlFor="ANNUAL4" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 500,000 - 1,000,000 </label>
                                    </div>

                                    <div className="w-1/2 p-2">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL5" value="AED 1,000,000 - 5,000,000" className="peer hidden"   />
                                        <label htmlFor="ANNUAL5" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 1,000,000 - 5,000,000 </label>
                                    </div>

                                    <div className="w-1/2 p-2">
                                        <input type="radio" name="ANNUALTURNOVER" id="ANNUAL6" value="AED 5,000,000 +" className="peer hidden"   />
                                        <label htmlFor="ANNUAL6" className="block cursor-pointer select-none rounded py-2 px-2 border border-gray-500 text-center  peer-checked:font-bold " > AED 5,000,000 + </label>
                                    </div>
                                </div>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">
                            <BtnBack Backward={slideBack8}/>
                            <BtnNext forward={SlideForward9}/>
                        </div>


                </div>

                <div className={`TenthSlide transition-all duration-300   ${TenthSlide == false ? "opacity-0  absolute -translate-y-full top-5555 " : "translate-y-0"} `}>

                        <div className="title">
                                <h2 className="textMainColor " > متى تخطط لبدء عملك التجاري؟  </h2>
                            </div>


                        {wrongData && 
                                <div className="wrongData text-red-700  -500 py-2 px-10 mb-4 my-5  w-full  rounded-xl bg-red-100"> {wrongData}  </div>
                        }

                        <div className="inputs flex flex-wrap mt-7 ">

                            <div className="flex items-center gap-5 radioInputs">
                                <div>
                                        <input type="radio" name="START YOUR BUSINESS" id="Immediately" value="start Immediately" className="peer hidden" ref={StartImmediatelyRef}  />
                                        <label htmlFor="Immediately" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > الان </label>
                                    </div>

                                    <div>
                                        <input type="radio" name="START YOUR BUSINESS" id="Next" value="start Next Month" className="peer hidden" ref={StartNextMonthRef} />
                                        <label htmlFor="Next" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > الشهر القادم </label>
                                    </div>

                                    <div>
                                        <input type="radio" name="START YOUR BUSINESS" id="Undecided" value="Undecided" className="peer hidden" ref={UndecidedMonthRef} />
                                        <label htmlFor="Undecided" className="block cursor-pointer select-none rounded-xl py-2 px-4 text-center  peer-checked:font-bold peer-checked:text-white" > لم أقرر بعد </label>
                                    </div>


                                </div>
                            </div>

                        <div className="btns flex space-x-3 mt-12 gap-5">

                            <BtnBack Backward={slideBack9}/>

                            <button type="submit" onClick={() => SlideForward10()} className="bg-mainBackColor py-3 border-gray-200 border shadow px-10 flex justify-center items-center space-x-2 text-xl rounded-2xl text-white ">
                                ارسل 
                                <svg width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short submitArrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>
                                <div className="loader mr-2 hidden"></div>

                            </button>
                        </div>

                </div>



            </form>



        </div>

        <div className="rightContent w-full lg:w-1/3 lg:h-screen p-14">
            <h2 className="text-white text-6xl textMainColor mb-8"> س.<span> {firstSlide ? "1" : secondSlide ? "2" : ThirdSlide ? "3" : FourthSlide ? "4" : FifthSlide ? "5" : SixthSlide ? "6" : SeventhSlide ? "7" : EighthSlide ? "8" : NinthSlide ? "9" : TenthSlide ? "10" : "خطأ" } </span> </h2>

            <div className="progressBar transition-all duration-100 w-full bg-white h-4 rounded-lg overflow-hidden mb-8">
                <div className={`bar ${firstSlide ? "wp-1" : secondSlide ? "wp-2" : ThirdSlide ? "wp-3" : FourthSlide ? "wp-4" : FifthSlide ? "wp-5" : SixthSlide ? "wp-6" : SeventhSlide ? "wp-7" : EighthSlide ? "wp-8" : NinthSlide ? "wp-9" : TenthSlide ? "wp-10" : "w-0"} w-1/6 h-full bg-mainBackColor`}></div>
            </div>
            <h3 className="text-white text-3xl textMainColor mb-5"> حاسبة التكلفة </h3>
            <p className="text-white text-xl"> استخدم حاسبة التكلفة التفاعلية لدينا واحصل على تقدير لمشروع أحلامك في دبي، الإمارات العربية المتحدة! </p>
        </div>
    </div>
    )
}
