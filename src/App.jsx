import './App.css'

import phoneImg from "./assets/phone.svg"   
import XphoneImg from "./assets/ClosePhone.svg"
import logoImg from "./assets/logosmarketing-T1-CEl9BVmk.png"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';





import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider} from "react-router-dom";
import Home from './Components/Home/Home'
import Layout from './Components/Layout/LayoutAR'
import Privacy from './Components/Privacy/Privacy'
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions'
import CookiesPolicy from './Components/CookiesPolicy/CookiesPolicy'
import NotFound from './Components/NotFound/NotFound'
import PrivacyAR from './Components/PrivacyAR/PrivacyAR'
import HomeAR from './AR/Home/HomeAR'
import { useState } from 'react';
import CallBack from './Components/CallBack/CallBack';
import CostCalculator from './Components/CostCalculator/CostCalculator';
import CostCalculatorAR from './AR/CostCalculatorAr/CostCalculatorAR';


// s

const router = createHashRouter([
  {path: "",
  element: <Layout  />    , 
  children: [
    {element: <Home/>, path: '/'},
    {element: <Home/>, path: 'home'},
  ]},
  {element: <HomeAR/>, path: '/Ar'},
  {element: <HomeAR/>, path: 'homeAR'},
  {element: <Privacy/>, path: 'PrivacyPolicy'},
  {element: <PrivacyAR/>, path: 'PrivacyPolicyAr'},
  {element: <TermsAndConditions/>, path: 'TermsAndConditions'},
  {element: <CookiesPolicy/>, path: 'CookiesPolicy'},
  {element: <CostCalculator/>, path: '/CostCalculator'},
  {element: <CostCalculatorAR/>, path: '/CostCalculatorAR'},
  {
    path: "*",
    element: (
      <NotFound/>
    ),
  },
])



function App() {

  const [phoneClick, setPhoneClick] = useState(false);
  const [requestCallBack, setRequestCallBack] = useState(false);


  const updateRequestCallBack = (newState) => {
      setRequestCallBack(newState);
  };



  return (
    <>


  <RouterProvider router={router}/>


    <CallBack isOpen={requestCallBack}  updateState={updateRequestCallBack} />


      <div className="whatsapp fixed  bottom-7 left-2 z-10">
        <a href=" https://wa.me/+971557480115"  target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
              <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
            </svg>
        </a>
      </div>


      <div className="contactPhone fixed  bottom-7 right-5 flex flex-col justify-center space-y-5 z-10">
          
          <ul  className={`flBtn-first   ${phoneClick == false ? "invisible opacity-0"  :  "visible opacity-1"  } `}> 
      
              <li onClick={()=> setRequestCallBack(!requestCallBack)} className='cllback'>
                <span className="popmake-161 pum-trigger" tooltip="Request a Callback" style={{cursor: "pointer"}}>
                  <svg viewBox="0 0 512 512" enable-background="new 0 0 512 512"><g><g><path d="m341.7,450.9c-9,6.3-33.3,21.9-88.6-13.2-51.6-32.7-163.7-118.5-197.2-286.2-9.5-47.3-3.3-72.3 19-87.7 38.1-26.3 74.8-3 82.4,10.8 28.4,51.2-16.7,80.5-28.4,87-7.5,4.1-12.2,11.7-11.5,20.2 5.5,62.2 74.6,162.1 129.6,187.6 7.6,3.5 17,2.3 22.7-3.8 8.1-8.7 55.4-40.6 90.8,3.8 19.4,24.1 9.2,62-18.8,81.5zm-88.4-124.8c-37.3-25-82.4-90.6-93.1-135.4 0.5-0.3 82.2-54.6 30.7-139.3-14.9-24.4-46.9-40.4-78.8-40.4-21.5,0-42.5,6.7-60.6,19.3-46.1,32.1-44.1,82.9-35.9,127.9 24.4,134 113.3,253.4 216.9,314.8 23.2,13.8 50.9,28.1 80.7,28.1 18.5,0 36-5.6 51.8-16.6 46.4-32.3 59.8-100.1 29.2-138.3-62.1-77.4-140.4-20.5-140.9-20.1z"></path><path d="m480.6,146.7h-138.9l42.7-39.3c8.3-7.6 8.8-20.6 1.2-28.9-7.6-8.3-20.5-8.8-28.8-1.2l-81.2,74.7c-4.2,3.9-6.6,9.3-6.6,15 0,5.7 2.4,11.2 6.6,15l81.2,74.7c3.9,3.6 19,8.4 28.8-1.2 8.1-7.9 7.1-21.2-1.2-28.9l-42.7-39.3h138.9c11.3,0 20.4-9.1 20.4-20.4 0-11.1-9.1-20.2-20.4-20.2z"></path></g></g></svg>
                </span> 
      
              </li>
            
                <li className='callUs mt-4 '>
                    <a className="btn" href="tel:+971557480115" tooltip="Call Us Now !">
                      <svg viewBox="0 0 512 512" enable-background="new 0 0 512 512"><g><g><path d="m341.6,450.9c-9,6.3-33.3,21.9-88.6-13.2-51.5-32.7-163.6-118.5-197.1-286.2-9.5-47.3-3.3-72.3 18.9-87.7 38-26.3 74.7-3 82.4,10.8 28.4,51.2-16.7,80.5-28.3,87-7.5,4.1-12.2,11.7-11.5,20.2 5.5,62.2 74.5,162.1 129.6,187.6 7.6,3.5 17,2.3 22.7-3.8 8.1-8.7 55.4-40.6 90.8,3.8 19.3,24.1 9.1,62-18.9,81.5zm-88.4-124.8c-37.3-25-82.4-90.6-93.1-135.4 0.5-0.3 82.2-54.6 30.7-139.3-14.8-24.4-46.9-40.4-78.8-40.4-21.5,0-42.5,6.7-60.6,19.3-46,32.1-44,82.9-35.8,127.9 24.4,134 113.2,253.4 216.9,314.8 23.2,13.8 50.9,28.1 80.6,28.1 18.5,0 36-5.6 51.8-16.6 46.4-32.3 59.8-100.1 29.2-138.3-62.1-77.4-140.4-20.5-140.9-20.1z"></path><path d="m501,177.3c0-5.7-2.4-11.2-6.6-15l-81.2-74.7c-8.3-7.6-21.2-7.1-28.8,1.2-7.6,8.3-7.1,21.2 1.2,28.8l42.7,39.3h-139c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h138.9l-42.7,39.3c-8.3,7.6-8.8,20.6-1.2,28.9 7.6,8.3 20.6,8.8 28.8,1.2l81.2-74.7c4.3-4 6.7-9.4 6.7-15.1l0,0z"></path></g></g>
                      </svg>
                  </a> 
                </li>
          </ul>
      
          <div onClick={()=> setPhoneClick(!phoneClick)} className="phoneClick">
      
              {phoneClick == false ?  <img src={phoneImg} alt="phoneImg" /> :   <img src={XphoneImg} width={30} alt="XImg" /> }
          </div>
      
      </div>

    </>
  )
}

export default App
