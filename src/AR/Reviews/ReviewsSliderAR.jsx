import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ReviewsStyleAR.scss"




function ReviewsSlider() {
    const settings = {
        infinite: true,
        dots:true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        };
    return (
    <div className="slider-container">
    <Slider {...settings}>



<div className="sliderOBox px-5   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> R </span>روبي نصيف</div>
        
        <p className="mt-3">
            كنت معجبًا حقًا بما قامت به سماركتينج <sup className="font-2 fw-light">®</sup>
            دبي، العمل المذهل حقًا. تلقيت شركتي المملوكة بنسبة 100 بالمئة في البر الرئيسي مسجلة
            مع الإقامة خلال 7 أيام كما وعدت.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>



<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> A </span>أربيت تومار</div>
        
        <p className="mt-3">
            حصلت على تأشيرة إقامتي من سماركتينج <sup className="font-2 fw-light">®</sup>
            الإمارات في فترة قصيرة جدًا. ساعدني السيد مالك والسيد سني كثيرًا. كان التواصل سهلاً للغاية.
            كانوا متاحين طوال الوقت وأيضًا يردون على المكالمات ليلاً.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>



<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> K </span>كي في سي كونسلتينج</div>
        
        <p className="mt-3">
            خدمة مهنية وسريعة وشفافة وطاقم عمل،
            كنت أتعامل مع إنسيا التي قادتني خلال العملية بأكملها،
            جعلت الأمر سهلاً جدًا وأنشأت الشركة في وقت قصير جدًا.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>


<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> M </span>مريم العبري</div>
        
        <p className="mt-3">
            كانت تجربة رائعة العمل مع شوبنا وفريقها.
            كانوا فعالين جدًا وذوي معرفة وساعدوني
            في ترخيصي المستقل من الألف إلى الياء في أقل من شهر.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>


<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> B </span>بيف أتينزا</div>
        
        <p className="mt-3">
            كنت مترددًا جدًا في إنشاء عمل لأنني كنت أظن أن هناك بعض
            العقبات في الامتثال للمتطلبات وكل شيء. لكن، أوصاني صديق بسماركتينج
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>


<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> R </span>راهول ألوركار</div>
        
        <p className="mt-3">
            سماركتينج <sup className="font-2 fw-light">®</sup>
            الإمارات هي أفضل إعداد للأعمال في الإمارات، للعمل معها. لقد كانت لدي تجربة رائعة
            معهم خلال السنوات الست الماضية وسأوصي بهم بالتأكيد
            لجميع عملائي وزملائي.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>


<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> L </span>لوك ديسماريس</div>
        
        <p className="mt-3">
            شكرًا جزيلاً لفريق سماركتينج <sup className="font-2 fw-light">®</sup>
            دبي الذي ساعدني في الإعداد بسرعة واحترافية كبيرة،
            الآن أنا جاهز تمامًا في الإمارات لشركتي الجديدة.
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>


<div className="sliderOBox px-3   ">

    <div className="sliderInnerBox rounded-2xl shadow-2xl  flex flex-col items-center justify-center p-7 py-10">
    <div className="title flex items-center"> <span className="bg-mainBackColor"> A </span>عبد الحميد</div>
        
        <p className="mt-3">
            خبير ذو سمعة طيبة، طاقم عمل ذو خبرة. أنا أوصي بكم سماركتينج
        </p>

        <div className="stars flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBC3F" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg> 
        </div>
    </div>
    
</div>










        </Slider>
    </div>
    );
}

export default ReviewsSlider;