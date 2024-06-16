import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar/Navbar" 
// import  Hero from "./components/Hero/Hero" 
import Project from "./components/project/Project"
import Services from "./components/services/Services"
import Socialservices from "./components/socialservices/Socialservices"
import Self from './components/self/Self'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Self/>
      <Project/>
      {/* <Services/>
      <Socialservices/> */}
      

      </div>
      
    </>
  )
}

export default App
