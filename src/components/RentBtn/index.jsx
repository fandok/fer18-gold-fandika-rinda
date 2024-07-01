import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const RentBtn = ({ link }) => {
  return (
    <Link to={link}>
      <button className="rent-btn">Mulai Sewa Mobil</button>
    </Link>
  );
};
export default RentBtn;
