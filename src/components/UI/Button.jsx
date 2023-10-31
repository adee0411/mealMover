import "./Button.scss";

import { Link } from "react-router-dom";

const Button = ({ variant, icon, title, path }) => {
  return (
    <Link to={path} className={`btn btn--${variant}`}>
      <span className="btn__content">
        <span className="btn__icon">{icon}</span>

        <span className="btn__title">{title}</span>
      </span>
    </Link>
  );
};

export default Button;
