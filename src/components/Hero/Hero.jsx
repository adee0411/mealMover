import "./Hero.scss";

import Button from "../UI/Button";
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
          <Button
            variant="primary"
            title="Visit Today"
            icon={<MdLocationPin />}
          />
          <Button
            variant="secondary"
            title="View Menu"
            icon={<MdOutlineRestaurantMenu />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
