import "./Logo.scss";
import LogoIcon from "../../assets/images/taco_128_primary.png";

const Logo = ({ variant }) => {
  return (
    <a href="#" className={`logo ${variant ? `logo--${variant}` : ""}`}>
      <div className="logo__img">
        {" "}
        <img src={LogoIcon} />
      </div>
      <span className="logo__text">MealMover</span>
    </a>
  );
};

export default Logo;
