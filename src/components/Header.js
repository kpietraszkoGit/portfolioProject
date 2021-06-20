import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>maciej stokłosa</h1>
        <h2>Doradca Finansowy</h2>
        <Typed
          className="typed-text"
          strings={["Kredyty", "Ubezpieczenia", "Emerytury", "Inwestycje"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer" href="#">kontakt</Link>
      </div>
    </div>
    
  )
}

export default Header;