import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import Collections from './Components/Collections/Collections'
import Support from './Components/Support/Support'

const App = () => {
  return (
    <div>
      <Navbar/>
     <Collections/>
    <Support/>
    </div>
  )
}

export default App
