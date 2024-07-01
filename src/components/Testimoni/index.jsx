import "./styles.css";
import { testimoniList } from "../../dummy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Testimoni = ({ isOpen }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 600,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${isOpen ? "blur" : ""}`} id="testimony">
      <div className="testimoni-container">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <div className="testimoni-card-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {testimoniList.map((data) => {
              return (
                <div style={{ width: 650 }} key={data.id}>
                  <div className="testimoni-card">
                    <img src={data.img} alt="testimoni-img" />
                    <div className="card-list">
                      <img src={data.rate} alt="" />
                      <p>"{data.desc}"</p>
                      <h4>{data.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="arrow-btn">
          <button className="btn-prev" onClick={previous}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="btn-next" onClick={next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Testimoni;
