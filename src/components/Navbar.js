import logo from "../logoFinance.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">strona główna<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">o mnie</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">klienci indywidualni</Link>
            </li>
            {/* <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">doświadczenie</Link>
            </li> */}
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">klienci biznesowi</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">kontakt</Link>
            </li>

          </ul>

        </div>
        <div class="boxAnimation">
        <div class="box__content">
          <div class="box__title">KONTAKT</div>
          <div class="box__description">
            <div className="d-flex justify-content-center fw-bold">
            <p>Adam Kowalski</p>
            </div>
            <div className="d-flex justify-content-center">
            <p>Kraków ul. Wolna 5, 34-322</p>
            </div>
            <div className="d-flex justify-content-center">
              <p><a href="tel:999-000-000">+48 999-000-000</a></p>
            </div>
            <div className="d-flex justify-content-center">
              <p>adamkowalski_finanse@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </nav>
  )
}

export default Navbar