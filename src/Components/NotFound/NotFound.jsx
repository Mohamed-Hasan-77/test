import "./NotFoundStyle.scss"
import myImage from "../../assets/logosmarketing-T1-CEl9BVmk.png"
import PolicyFooter from '../policyFooter/policyFooter';
import { Link } from "react-router-dom";

export default function NotFound() {
return (
    <div id="privacy" >


    <div className="navBar ">
        <div className="container flex  justify-between">

        
        <div className="logo">

            <Link to={"/"}>
                <img id="pageLogo" src={myImage}  alt="logo"/>
            </Link>
        </div>

        <div className="navright flex items-center ">
            <div className="btn mr-8">
                <button className=" position-relative  bg-mainBackColor fw-bold  py-2 px-3  rounded-full outline-none"> COST CALCULATOR </button>
            </div>


            <div className="num mt-1 mx-4 hidden lg:block text-white hover:text-white transition-colors duration-200">
                <a  href="tel:+971557480115" title="Call Us - +971557480115">+971557480115</a>
        </div>
        </div>
        </div>
    </div>


    <div id="Privacy" className="content h-screen">
        <div className="title pb-32 pt-24 text-white">
            <div className="container">
                        <ul className="breadcrumb flex mb-5">
                            <li className=""><Link to={"/"}> Homepage </Link></li> 
                            <li className="ml-5 active" >Not Found</li> 
                        </ul>
                <h1 className="text-6xl  "><strong>  <span className="under-line"> 404  </span> Not Found</strong></h1>

                    <Link to={"/"} className="arrowDown w-fit p-3 ml-auto border rounded-full block" > Go Back </Link>
            </div>            
        </div>



    </div>






</div>
)
}
