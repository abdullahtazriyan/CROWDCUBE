import './App.css'
import Footer from './Conponents/Footer'
import FaqSection from './Conponents/FaqSection '
import Nav from './Conponents/Nav'
import MainLayout from './Layout/MainLayout'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <> <Outlet></Outlet>
      <MainLayout></MainLayout>
    </>
  )
}

export default App
