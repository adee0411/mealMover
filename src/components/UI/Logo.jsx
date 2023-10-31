import "./Logo.scss";
import LogoIcon from "../../assets/images/taco_128_primary.png";

import { Link } from "react-router-dom";

const Logo = ({ variant }) => {
  return (
    <Link to="/" className={`logo ${variant ? `logo--${variant}` : ""}`}>
      <div className="logo__img">
        {" "}
        <img src={LogoIcon} />
      </div>
      <span className="logo__text">MealMover</span>
    </Link>
  );
};

export default Logo;
