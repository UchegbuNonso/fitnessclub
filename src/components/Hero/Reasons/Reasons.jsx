import React from "react";
import "./Reasons.css";
import image1 from "./../img/image1.png";
import image2 from "./../img/image2.png";
import image3 from "./../img/image3.png";
import image4 from "./../img/image4.png";
import nb from "./../img/nb.png";
import nike from "./../img/nike.png";
import adidas from "./../img/adidas.png";
import tick from "./../img/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt={image1} />
        <img src={image2} alt={image2} />
        <img src={image3} alt={image3} />
        <img src={image4} alt={image4} />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 100 EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN FASTER AND SMARTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
        <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Reasons;
