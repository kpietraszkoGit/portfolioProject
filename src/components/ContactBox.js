import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import author from "../maciek.jpg";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_POSvlRD90ZIj8EKuxrI6u";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Wiadomość została wysłana poprawnie!");
      }).catch(err => console.error(`Coś poszło źle ${err}`));
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>umów sie na spotkanie ze mną</h1>
        <p>Zostaw swoje dane a oddzwonię i omówimy szczegóły</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12 px-5">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Imię"
                  name="name"
                  ref={
                    register({
                      required: "Proszę wpisać swoje imię",
                      maxLength: {
                        value: 20,
                        message: "Proszę wpisać imię zawierające mniej niż 20 znaków"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numer telefonu"
                  name="phone"
                  ref={
                    register({
                      required: "Proszę wpisać swój numer telefonu",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "Proszę podać e-mail",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Temat"
                  name="subject"
                  ref={
                    register({
                      required: "UPS, zapomniałeś podać temat",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Proszę opisać swoje potrzeby..."
                  name="description"
                  ref={
                    register({
                      required: "Opisz krótko swoje potrzeby...",
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">Wyślij</button>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author..." />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
