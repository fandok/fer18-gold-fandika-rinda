// import React from "react";
import "./styles.css";
import { whyUsList } from "../../dummy";

const WhyUs = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? "blur" : ""}`} id="whyUs">
      <div className="why-us-wrapper">
        <div className="why-us-container">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="whyUs-card-wrapper">
            {whyUsList.map((data) => {
              return (
                <div className="whyUs-card" key={data.id}>
                  <img src={data.icon} alt="" />
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
