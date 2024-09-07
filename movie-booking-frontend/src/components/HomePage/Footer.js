import logo from "../../assets/logo.png";
import "../../i18n";
import { useTranslation } from "react-i18next";
import "../../styles/home.scss";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="border-bottom">
        <div className="footer-container">
          <div className="footer-top">
            <div className="input">
              <input type="email" placeholder="Enter your email"></input>
              <button>
                <span className="icon-keyboard_backspace"></span>
              </button>
            </div>
            <div className="thumb">
              <img src={logo} alt="Logo Footer"></img>
            </div>
            <div className="social-media">
              <div className="icon facebook">
                <FaFacebook />
              </div>
              <div className="icon youtube">
                <FaYoutube />
              </div>
              <div className="icon instagram">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t("Copyright")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
