import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.block} />
        </Link>
        <div className={styles.navigation}>
          <div>Our Services</div>
          <div>Why Us</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <img
          onClick={handleOpen}
          className={styles.menu}
          width={24}
          height={24}
          src="/icons/icon-menu.svg"
          alt="menu"
        />
      </div>
      <Offcanvas
        className={styles.offcanvasContainer}
        direction="end"
        toggle={handleClose}
        isOpen={isOpen}
      >
        <OffcanvasHeader toggle={handleClose}>
          <span className={styles.offcanvasHeader}>BCR</span>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className={styles.offcanvasItem}>Our Services</div>
          <div className={styles.offcanvasItem}>Why Us</div>
          <div className={styles.offcanvasItem}>Testimonial</div>
          <div className={styles.offcanvasItem}>FAQ</div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Header;
