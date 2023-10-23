import "./Button.scss";

const Button = ({ variant, icon, title }) => {
  return (
    <button className={`btn btn--${variant}`}>
      <span className="btn__content">
        <span className="btn__icon">{icon}</span>

        <span className="btn__title">{title}</span>
      </span>
    </button>
  );
};

export default Button;
