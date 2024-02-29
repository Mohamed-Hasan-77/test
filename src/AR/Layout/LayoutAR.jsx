
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import Hero from "../Hero/Hero";



export default function Layout( ) {
    return <>

    <Hero />

    <Outlet/>

    <Footer/>

</>
}
