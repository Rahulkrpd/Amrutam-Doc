
import Navbar from './components/Header/Navbar'
import PopupLogin from './components/Header/PopupLogin'
import DisplayDoc from './components/Section1/DisplayDoc'
import Features from './components/section2/Features'
import WhyUs from './components/section3/WhyUs'
import JoinCircle from './components/section4/JoinCircle'

function App() {


  return (
    <>
      <PopupLogin />
      <Navbar />
      <DisplayDoc />
      <Features />
      <WhyUs />
      <JoinCircle />
    </>
  )
}

export default App
