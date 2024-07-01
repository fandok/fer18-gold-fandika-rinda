import React from "react";
import "./styles.css";
import OurServiceImg from "/icons/img_service.png";
import { ourServiceList } from "../../dummy";
const OurService = () => {
  return (
    <div className="our-service-wrapper">
      <div className="our-service">
        <div className="our-service-image">
          <img src={OurServiceImg}></img>
        </div>
        <div className="our-service-text">
          <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="our-service-list">
            {ourServiceList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurService;
