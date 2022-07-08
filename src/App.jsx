import React, { useState } from 'react'
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Topbar from './Components/Topbar/Topbar'
import Works from './Components/Works/Works';
import Menu from './Components/Menu/Menu';
import './App.scss';
import Map from './Components/Map/Map';



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <div className='app'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
          <Map />
        </div>
      </div>
    )
 
}



