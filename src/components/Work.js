import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { IoPeopleOutline, IoCreateOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import ContactBox from "./ContactBox";

const Services = () => {
  return (
    <div id="work" className="work">
      <h1 className="py-5">na czym polega współpraca</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 px-5">
            <div className="line">____________________</div>
            <p>Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            <button className="btn-main-offer work-btn" data-toggle="modal" data-target="#exampleModal">Umów się na spotkanie</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button> */}
                  </div>
                  <div className="modal-body">
                    <ContactBox />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 px-5">
            <ul className="work-points">1. Spotkanie i Analiza Finansowa</ul>
            <div className="row">
              <IoPeopleOutline className="col-lg-2 col-md-2 col-sm-1 work-icons"/>
              <p className="col-lg-10 col-md-10 col-sm-11">Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
            <ul className="work-points">2. Wyszukanie, przygotowanie i konsultacja rozwiązań</ul>
            <div className="row">
              <IoIosSearch className="col-lg-2 col-md-2 col-sm-1 work-icons"/>
              <p className="col-lg-10 col-md-10 col-sm-11">Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
            <ul className="work-points">3. Podpisanie umowy</ul>
            <div className="row">
              <IoCreateOutline className="col-lg-2 col-md-2 col-sm-1 work-icons"/>
              <p className="col-lg-10 col-md-10 col-sm-11">Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;