import './App.css'
import About from './components/About/About'
import GlobalAgencyHero from './components/GlobalAgencyHero/GlobalAgencyHero'
import HeroSection from './components/HeroSection/HeroSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import InfoSection from './components/InfoSection/InfoSection'
import Navbar from './components/Navbar/Navbar'
import ServicesOverview from './components/SisterConcern/SisterConcern'
import SisterConcern from './OurCompanies/OurCompanies'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <About></About> */}
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <GlobalAgencyHero></GlobalAgencyHero>
      <ServicesOverview></ServicesOverview>
      <HowItWorks></HowItWorks> 
      <SisterConcern></SisterConcern>
    </>
  )
}

export default App
