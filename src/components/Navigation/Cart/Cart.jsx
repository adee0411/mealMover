import "./Cart.scss";

import { useRef } from "react";

import { AiOutlineClose } from "react-icons/ai/index";

import TestImage from "../../../assets/images/pexels-adrian-dorobantu-2300031_COMPRESSED.jpg";
import TestImage2 from "../../../assets/images/pexels-engin-akyurt-1437267.jpg";

const Cart = ({ onShowCart }) => {
  const productQuantityRef = useRef();

  const handleQuantityChange = (e) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
  };
  return (
    <div className="cart-wrapper">
      {/** Overlay */}
      <div className="cart-overlay"></div>
      {/** Cart content */}
      <div className="cart">
        <header className="cart__header">
          <h3 className="cart__title">
            Your <span className="colored">Cart</span>
          </h3>
          <div className="cart__close">
            <button onClick={onShowCart}>
              <AiOutlineClose />
            </button>
          </div>
        </header>
        <div className="cart__content">
          <ul className="product-list">
            <li className="product-list__item">
              <div className="item-wrapper">
                <div className="img-cont">
                  <img src={TestImage} />
                </div>
                <div className="product-details">
                  <h4 className="product-details__title">Pasta Classic</h4>
                  <p className="product-details__price">2399 Ft</p>
                  <form className="product-details__action">
                    <button className="remove-product">Remove</button>
                  </form>
                </div>
              </div>
              <form className="quantity-form">
                <input
                  type="number"
                  defaultValue={1}
                  name="product-quantity"
                  onChange={handleQuantityChange}
                  ref={productQuantityRef}
                />
              </form>
            </li>
            <li className="product-list__item">
              <div className="item-wrapper">
                <div className="img-cont">
                  <img src={TestImage2} />
                </div>
                <div className="product-details">
                  <h4 className="product-details__title">Pasta Classic</h4>
                  <p className="product-details__price">2399 Ft</p>
                  <form className="product-details__action">
                    <button className="remove-product">Remove</button>
                  </form>
                </div>
              </div>
              <form className="quantity-form">
                <input
                  type="number"
                  defaultValue={1}
                  name="product-quantity"
                  onChange={handleQuantityChange}
                  ref={productQuantityRef}
                />
              </form>
            </li>
          </ul>
        </div>
        <footer className="cart__footer">
          <div className="total">
            <span className="total__text">Subtotal</span>
            <span className="total__price">4798 Ft</span>
          </div>
          <form className="checkout">
            <button className="checkout-btn">Continue to Checkout</button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
