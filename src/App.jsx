import './App.css'
import CompanySetup from './Components/CompanySetup/CompanySetup'
import Hero from './Components/Hero/Hero'
import Packages from './Components/Packages/Packages'
import PartnersCarousel from './Components/Partners/PartnersCarousel'
import BankPartners from './Components/BankPartners/BankPartners'
import Services from './Components/Services/Services'
import UAEDifferent from './Components/UAEDifferent/UAEDifferent'
import StartYourJourney from './Components/StartYourJourney/StartYourJourney'
import Reviews from './Components/Reviews/Reviews'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Hero/>
      <Packages/>
      <CompanySetup/>
      <StartYourJourney/>
      <Services/>
      <UAEDifferent/>
      <PartnersCarousel/>
      <BankPartners/>
      <Reviews/>
      <FAQ/>
      <Footer/>

      <div className="whatsapp">
        <img src="" alt="" />
      </div>
    </>
  )
}

export default App
