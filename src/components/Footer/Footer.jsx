import "./Footer.scss";
import Logo from "../UI/Logo";

import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai/index";
import { BiLogoFacebook } from "react-icons/bi/index";
import { BsFillTelephoneFill } from "react-icons/bs/index";
import { FaEnvelope } from "react-icons/fa/index";
import { FiChevronRight } from "react-icons/fi/index";

import Button from "../UI/Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo variant="inverted" />
      </div>
      <div className="footer__social">
        <a href="https://www.facebook.com/">
          <BiLogoFacebook />
        </a>
        <a href="https://www.facebook.com/">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.facebook.com/">
          <AiOutlineInstagram />
        </a>
      </div>
      <menu className="footer__menu">
        <li className="menu__item">
          <a href="#" className="menu__link">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Menu
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Blog
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Truck Location
          </a>
        </li>
      </menu>
      <div className="footer__contact">
        <div className="footer__phone">
          <div>
            <span className="icon">
              <BsFillTelephoneFill />
            </span>
          </div>
          <div className="numbers">
            <span>(239) 555-0108</span>
            <span>(239) 555-0108</span>
          </div>
        </div>
        <div className="footer__email">
          <div>
            <span className="icon">
              <FaEnvelope />
            </span>
          </div>
          <div className="email">
            <span>foodtruck@example.com</span>
          </div>
        </div>
      </div>
      <form className="subscribe">
        <h3 className="subscribe__title">Subscribe to newsletters</h3>
        <div className="subscribe__input-wrapper">
          <label className="subscribe__label">
            <span className="icon">
              <FaEnvelope />
            </span>
            <span className="label-title" htmlFor="subscribe">
              Email:
            </span>
          </label>
          <div className="subscribe__input">
            <input type="text" id="subscribe" />
          </div>
          <div className="subscribe__submit">
            <button type="submit">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
