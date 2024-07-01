import Header from "../../Header";
import Search from "../pages/SearchPage";
import Footer from "../components/Footer";
import styles from "./styles.module.css";
import { useState } from "react";
import { ACCESS_TOKEN, LIST_URL } from "../constants";

const CariMobil = () => {
  const [carList, setCarList] = useState([]);
  const [formInput, setFormInput] = useState({
    name: "",
    category: "",
    minPrice: 0,
    maxPrice: 0,
    isRented: false,
  });

  const handleSearch = async () => {
    const searchParams = new URLSearchParams();
    Object.keys(formInput).forEach((value) => {
      if (formInput[value]) {
        searchParams.append(value, formInput[value]);
      }
    });

    const response = await fetch(LIST_URL + "?" + searchParams, {
      headers: {
        access_token: ACCESS_TOKEN,
      },
    });

    const responseData = await response.json();
    setCarList(responseData.cars || []);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <Search
        formInput={formInput}
        setFormInput={setFormInput}
        handleSearch={handleSearch}
      />
      <div className={styles.cars}>
        {carList.map((car) => (
          <div key={car.id} className={styles.carItem}>
            <img className={styles.carImage} src={car.image} alt={car.name} />
            <div className={styles.carName}>{car.name}</div>
            <div className={styles.carPrice}>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 1,
              }).format(car.price)}{" "}
              / hari
            </div>
            <div className={styles.carDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button className={styles.carButton}>Pilih Mobil</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CariMobil;
