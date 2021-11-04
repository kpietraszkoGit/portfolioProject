import React from "react";

import wealth from "../images/wealth.png";
import invest from "../images/invest.png";
import cash from "../images/cash.png";
import money from "../images/money.png";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Wealth
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={wealth} alt="Wealth..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/a", "_blank")}>https://</a>
        <br />
        <b>Link:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-projects")}>https://</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Lorem ipsum, dolor sit amet consectetur."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Invest
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={invest} alt="Invest..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.coms/", "_blank")}>https://</a>
        <br />
        <b>Link:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-apps", "_blank")}>https://</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Lorem ipsum, dolor sit amet consectetur."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Cash
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cash} alt="Cash..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.coms/", "_blank")}>https://</a>
        <br />
        <b>Link:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilisso", "_blank")}>https://</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Lorem ipsum, dolor sit amet consectetur."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Money
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={money} alt="Money..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/a", "_blank")}>https://</a>
        <br />
        <b>Link:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manageraa", "_blank")}>https://</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Lorem ipsum, dolor sit amet consectetur."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">klienci biznesowi</h1>
        <div className="text-center text-portflio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis. 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</div>
        <div className="image-box-wrapper row">
          <div className="portfolio-image-box col-md-6 col-lg-3" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={wealth} alt="Wealth..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col-md-6 col-lg-3" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={invest} alt="Invest..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col-md-6 col-lg-3" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={cash} alt="Cash..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col-md-6 col-lg-3" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={money} alt="Money..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Pofrfolio;
