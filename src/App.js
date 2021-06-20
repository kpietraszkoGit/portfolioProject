import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <Work />
      <AboutMe />
      <ContactMe />
      <Services />
      {/* <Experience /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
