import "./Hero.scss";

import { MdLocationPin, MdOutlineRestaurantMenu } from "react-icons/md/index";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__content">
        {" "}
        <h1 className="hero__title">
          <span className="hero__title--colored">Delicious and authentic</span>
          <br />
          <span>street food!</span>
        </h1>
        <p className="hero__description">
          We take pride in offering a wide variety of mouthwatering dishes that
          are made with only the freshest and highest quality ingredients.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary">
            <span className="btn__content">
              <MdLocationPin className="btn__icon" />
              <span className="btn__title">Visit Today</span>
            </span>
          </button>
          <button className="btn btn--secondary">
            <span className="btn__content">
              <MdOutlineRestaurantMenu className="btn__icon" />
              <span className="btn__title">View Menu</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
