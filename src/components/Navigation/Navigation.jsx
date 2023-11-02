import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleNavigation } from "../../store/navigationSlice";

import "./Navigation.scss";
import Logo from "../UI/Logo";
import Cart from "./Cart/Cart";

import NavMenu from "./NavMenu";

import Burger from "../../assets/images/burger_64.png";
import { FaShoppingCart } from "react-icons/fa/index";

import { addCartAnimation } from "../../store/navigationSlice";

const Navigation = () => {
  const numOfItems = useSelector((state) => state.cart.cart.numOfItems);
  const cartFeedback = useSelector((state) => state.navigation.cartFeedback);
  const dispatch = useDispatch();

  const toggleNavMenu = () => {
    dispatch(toggleNavigation());
  };

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };

  useEffect(() => {
    const cartTimeout = setTimeout(() => {
      dispatch(addCartAnimation(false));
    }, 1000);

    return () => {
      clearTimeout(cartTimeout);
    };
  });
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="navigation">
          <Logo />
          <NavMenu />
          <div className="side-wrapper">
            <div
              className={`cart-container ${
                cartFeedback ? "cart-container--pulse" : ""
              }`}
            >
              <button
                className="cart-container__button"
                onClick={handleShowCart}
              >
                <FaShoppingCart />
                <span className="badge">{numOfItems}</span>
              </button>
            </div>
            <div className="burger-container">
              <button
                className="cart-container__button"
                onClick={toggleNavMenu}
              >
                <img src={Burger} />
              </button>
            </div>
          </div>
        </nav>
        {showCart && <Cart onShowCart={handleShowCart} />}
      </div>
    </header>
  );
};

export default Navigation;
