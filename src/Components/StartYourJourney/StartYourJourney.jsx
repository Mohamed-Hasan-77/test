import "./StartYourJourneyStyle.scss"
import MrAhmed from "../../assets/Mr Ahmed.jpg"
import ImgComponent from '../imgComponent/ImgComponent'



export default function StartYourJourney() {
    return (
    <div className="StartYourJourney bg-white py-32">

        <div className="container flex justify-between flex-wrap overflow-hidden lg:overflow-visible">

            {/* <div className="img w-full md:w-1/2 px-10 flex justify-center">

            <svg width="550" height="550" className="position-absolute top-0 start-0 end-0 bottom-0 z-n1" viewBox="0 0 200 200" style={{transform : "scale(1.25) rotate(237deg);"}}><path fill="#f1e4cf" d="M34.4,-67C41.6,-55.5,42.2,-40.1,47,-28.3C51.7,-16.5,60.6,-8.2,66.7,3.5C72.7,15.3,76,30.5,71.7,43.1C67.4,55.7,55.5,65.6,42.2,66.9C29,68.3,14.5,61.1,3.2,55.6C-8.2,50.1,-16.3,46.3,-29.6,45C-42.9,43.7,-61.4,44.9,-67.4,37.8C-73.5,30.7,-67.1,15.4,-63.5,2.1C-59.8,-11.1,-58.7,-22.2,-53.2,-30.2C-47.6,-38.1,-37.6,-42.9,-28,-53C-18.4,-63.1,-9.2,-78.5,2.2,-82.3C13.6,-86.2,27.3,-78.6,34.4,-67Z" transform="translate(100 100)"></path></svg>

                <img src={MrAhmed} className=" mrAhmed  rounded-xl " alt="MrAhmed" />
            </div> */}

            <ImgComponent myImg={MrAhmed} degree="-125deg"/>

            <div className="text w-full lg:w-1/2 mt-24 lg:mt-0">
                <h3>
                Let's Help you in initiating your 
                <span className="text-mainColor"> Journey <span className="under-line"> Towards </span> Success. </span>
                </h3>


                <p>  
                Welcome to Smart Zones
                <sup className="font-2 fw-light">®</sup>
                UAE Business Setup Consultants, your all-in-one destination for fulfilling your business establishment requirements in the UAE. We provide a comprehensive array of services designed to address all aspects of your business setup necessities. With our team of professionals specializing in company formation, we offer guidance throughout the entire process, covering tasks such as company registration, license acquisition, visa processing, legal documentation, bank account opening, office setup, and more.
                </p>

                <button className="px-7 py-2.5 rounded-full bg-mainLinearColor text-xl mt-7"> 
                    <a href=""> Request a Callback </a>
                </button>
            </div>

        </div>
        
    </div>
    )
}
