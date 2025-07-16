import { useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Conponents/Footer'
import FaqSection from './Conponents/FaqSection '
import Nav from './Conponents/Nav'

function App() {


  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      {/* <Nav></Nav>
      <FaqSection></FaqSection>
      <Footer></Footer> */}
      
    </>
  )
}

export default App
