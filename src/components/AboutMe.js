import React from "react";
import author from "../maciek.jpg";

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
          <h1 className="about-heading">Maciej Stokłosa</h1>
          <p className="about-text">
            Kashyyyk dooku solo fisto biggs leia. Luuke maul r2-d2 darth. Ahsoka luke lando mon endor twi’lek. Moff owen secura wedge darth mon hutt. 
            Amidala organa dagobah padmé skywalker. Sith chewbacca baba luuke. Lars moff hutt endor ackbar kashyyyk hutt hutt coruscant. Fett skywalker moff antilles lando organa lando organa dantooine. 
            Darth organa jar r2-d2 fett. Antilles boba darth ackbar wedge hutt chewbacca. Kenobi jango obi-wan organa kit. Lars boba leia cade. 
            Skywalker skywalker mon dagobah. Darth secura endor mara. Skywalker skywalker mon dagobah. Darth secura endor mara. Skywalker skywalker mon dagobah. Darth secura endor mara. 
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
