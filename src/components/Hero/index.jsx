import React from "react";
import CarImg from "/icons/img_car.png";
import "./styles.css";
import RentBtn from "../RentBtn";

const Hero = ({ id, isButtonShow = true }) => {
  return (
    <div className="hero-wrapper">
      <div id={id} className="hero">
        <div className="hero-text">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {isButtonShow && <RentBtn link={"/search"} />}
        </div>
        <div className="car-img">
          <img src={CarImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
