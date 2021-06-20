import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { IoDocumentTextOutline, IoDocumentsOutline } from 'react-icons/io5';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">klienci indywidualni</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><IoDocumentsOutline className="icon" /></div>
              <h3>Kredyty</h3>
              <p>Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><IoDocumentTextOutline className="icon" /></div>

              <h3>Ubezpieczenia</h3>
              <p>Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><GiReceiveMoney className="icon" /></div>

              <h3>Emerytury</h3>
              <p>Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><GiTakeMyMoney className="icon" /></div>

              <h3>Inwestycje</h3>
              <p>Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;