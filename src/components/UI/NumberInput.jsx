import { forwardRef } from "react";
import "./NumberInput.scss";

const NumberInput = forwardRef((props, ref) => {
  const {
    onHandleIncrease,
    onHandleDecrease,
    readOnly,
    defaultValue,
    min,
    max,
  } = props;

  const handleIncrease = (e) => {
    e.preventDefault();
    if (max !== undefined && +ref.current.value === max) {
      return;
    } else {
      onHandleIncrease();
    }
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    if (min !== undefined && +ref.current.value === min) {
      return;
    } else {
      onHandleDecrease();
    }
  };

  return (
    <div className="number-input">
      <button
        className="number-input__btn number-input__btn--decrease"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className={`number-input__input ${readOnly ? "read-only" : ""}`}
        type="number"
        defaultValue={defaultValue}
        name="product-quantity"
        ref={ref}
      />
      <button
        className="number-input__btn number-input__btn--increase"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
});

export default NumberInput;
