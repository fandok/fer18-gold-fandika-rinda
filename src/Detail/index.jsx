import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Search from "../Search";
import styles from "./styles.module.css";
import { ACCESS_TOKEN, CATEGORY_LIST, DETAIL_URL } from "../constants";
import Description from "./Description";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DETAIL_URL + id, {
        headers: {
          access_token: ACCESS_TOKEN,
        },
      });

      const responseData = await response.json();
      setData(responseData || {});
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className={styles.hero}>
        <Header />
        <div className={styles.search}>
          <Search />
        </div>
      </div>
      <div className={styles.content}>
        <Description />
        <div className={styles["content-info"]}>
          <img
            width={270}
            height={160}
            className={styles["info-image"]}
            src={data?.image}
            alt="car"
          />
          <div className={styles["info-name"]}>{data.name}</div>
          <div style={{ marginBottom: 55 }}>
            <img
              style={{ marginRight: 4 }}
              alt="people"
              src="/icons/icon-people.svg"
            />
            <span>{CATEGORY_LIST[data.category]}</span>
          </div>
          <div className={styles["info-total"]}>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 1,
              }).format(data.price)}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
