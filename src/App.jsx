import './App.css'
import GlobalAgencyHero from './components/GlobalAgencyHero/GlobalAgencyHero'
import HeroSection from './components/HeroSection/HeroSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import InfoSection from './components/InfoSection/InfoSection'
import Navbar from './components/Navbar/Navbar'
import ServicesOverview from './components/ServicesOverview/ServicesOverview'
import VisionSection from './components/VisionSection/VisionSection'
import SisterConcern from './SisterConcern/SisterConcern'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      {/* <VisionSection></VisionSection> */}
      <InfoSection></InfoSection>
      <GlobalAgencyHero></GlobalAgencyHero>
      <ServicesOverview></ServicesOverview>
      <HowItWorks></HowItWorks> 
      <SisterConcern></SisterConcern>
    </>
  )
}

export default App
