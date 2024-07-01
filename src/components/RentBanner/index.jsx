import React from "react";
import "./styles.css";
import RentBtn from "../RentBtn";
const RentBanner = () => {
  return (
    <div className="rent-banner-wrapper">
      <div className="rent-banner">
        <h1 className="rent-banner-title">Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p className="rent-banner-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <RentBtn link={"/search"} />
      </div>
    </div>
  );
};

export default RentBanner;
