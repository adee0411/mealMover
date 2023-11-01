import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleNavigation } from "../../store/navigationSlice";

import "./Navigation.scss";
import Logo from "../UI/Logo";
import Cart from "./Cart/Cart";

import NavMenu from "./NavMenu";

import Burger from "../../assets/images/burger_64.png";
import { FaShoppingCart } from "react-icons/fa/index";

const Navigation = () => {
  const numOfItems = useSelector((state) => state.cart.cart.numOfItems);
  const dispatch = useDispatch();

  const toggleNavMenu = () => {
    dispatch(toggleNavigation());
  };

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="navigation">
          <Logo />
          <NavMenu />
          <div className="side-wrapper">
            <div className="cart-container">
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
      </div>
      {showCart && <Cart onShowCart={handleShowCart} />}
    </header>
  );
};

export default Navigation;
