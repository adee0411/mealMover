import "./ActionButton.scss";

const ActionButton = ({ variant, icon, title, onHandleAction }) => {
  return (
    <button
      className={`btn btn--${variant} action-btn action-btn--${variant}`}
      onClick={onHandleAction}
    >
      <span className="btn__content">
        {icon && <span className="btn__icon">{icon}</span>}

        <span className="btn__title">{title}</span>
      </span>
    </button>
  );
};

export default ActionButton;
