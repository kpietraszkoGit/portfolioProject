import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import ContactBox from "./ContactBox";

const Contactme = () => {

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>spotkanie ze mną to inwestycja 1 godziny</h1>
          <button className="btn-main-offer contact-btn" data-toggle="modal" data-target="#exampleModal">Umów się na spotkanie</button>
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
    </div>
  )
}

export default Contactme;
