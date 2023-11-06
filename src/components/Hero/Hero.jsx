import "./Hero.scss";

import LinkButton from "../UI/LinkButton";
import { MdLocationPin, MdOutlineRestaurantMenu } from "react-icons/md/index";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__content">
        {" "}
        <h1 className="hero__title">
          <span className="hero__title--colored">Ízletes autentikus</span>
          <br />
          <span>street food!</span>
        </h1>
        <p className="hero__description">
          Autentikus street food kínálat - mindig friss alapanyagokból!
        </p>
        <div className="hero__actions">
          <LinkButton
            variant="primary"
            title="Hol vagyunk"
            icon={<MdLocationPin />}
          />
          <LinkButton
            variant="secondary"
            title="Menü"
            icon={<MdOutlineRestaurantMenu />}
            path="menu/osszes"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
