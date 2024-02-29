
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import Hero from "../Hero/Hero";



export default function LayoutAR( ) {
    return <>

    <Hero />

    <Outlet/>

    <Footer/>

</>
}
