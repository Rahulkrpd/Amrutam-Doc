import PopupLogin from './components/Header/PopupLogin'
import Navbar from './components/Header/Navbar'
import DisplayDoc from './components/DisplayDoc/DisplayDoc'
import WhyUs from "./components/WhyUs/WhyUs"
import Features from './components/Features/Features'
import JoinCircle from './components/JoinCircle/JoinCircle'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'  
import Connect from './components/Connect/Connect'
import ConnectForm from './components/ConnectForm/ConnectForm'
import Footer from './components/Footer.jsx/Footer'


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
