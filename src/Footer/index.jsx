import "./styles.css";

import iconFacebook from "/icons/icon-facebook.png";
import iconInstagram from "/icons/icon-instagram.png";
import iconTwitter from "/icons/icon-twitter.png";
import iconMail from "/icons/icon-mail.png";
import iconTwitch from "/icons/icon-twitch.png";
import { ADDRESS, EMAIL, MENU } from "../constants";

const IconImage = ({ source, text }) => <img src={source} alt={text} />;

const Footer = () => {
  return (
    <div className="container">
      <div className="item bold">
        <div>{ADDRESS}</div>
        <div>{EMAIL}</div>
        <div>081-233-334-808</div>
      </div>
      <div className="item">
        {MENU.map((value) => (
          <div key={value}>{value}</div>
        ))}
      </div>
      <div className="item bold">
        <div>Connect with us</div>
        <div className="icons">
          <IconImage source={iconFacebook} text="facebook" />
          <IconImage source={iconInstagram} text="instagram" />
          <IconImage source={iconTwitter} text="twitter" />
          <IconImage source={iconMail} text="mail" />
          <IconImage source={iconTwitch} text="twitch" />
        </div>
      </div>
      <div className="item bold">
        <div>Copyright Binar 2022</div>
        <div className="block" />
      </div>
    </div>
  );
};

export default Footer;
