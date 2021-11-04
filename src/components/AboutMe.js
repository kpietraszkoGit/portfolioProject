import React from "react";
import author from "../manOffice.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Adam Kowalski</h1>
          <p className="about-text">
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth. 
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth. 
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth. 
            Lucas ipsum dolor sit amet alderaan hutt mustafar aayla ackbar anakin secura antilles solo windu. Hoth kenobi leia kit anakin jar darth.
          </p>
          <div className="row">
            <div className="col-lg-4 about-number"><h1>5</h1> lat doświdczenia</div>
            <div className="col-lg-4 about-number"><h1>1000</h1> zadowolonych klientów</div>
            <div className="col-lg-4 about-number"><h1>100000</h1> wypłaconych kredytów</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
