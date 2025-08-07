
import ConnectForm from './components/ConnectForm/ConnectForm'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer.jsx/Footer'
import Navbar from './components/Header/Navbar'
import PopupLogin from './components/Header/PopupLogin'
import DisplayDoc from './components/Section1/DisplayDoc'
import Features from './components/section2/Features'
import WhyUs from './components/section3/WhyUs'
import JoinCircle from './components/section4/JoinCircle'
import Connect from './components/section5/Connect'
import Testimonials from './components/Testimonials/Testimonials'

function App() {


  return (
    <>
      <PopupLogin />
      <Navbar />
      <DisplayDoc />
      <Features />
      <WhyUs />
      <JoinCircle />
      <Testimonials />
      <FAQ />
      <Connect />
      <ConnectForm />
      <Footer />
    </>
  )
}

export default App
