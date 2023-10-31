import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../store/navigationSlice";

import "./Navigation.scss";
import Logo from "../UI/Logo";

import NavMenu from "./NavMenu";

import Cart from "../../assets/images/grocery-store_64.png";
import Burger from "../../assets/images/burger_64.png";
const Navigation = () => {
  const dispatch = useDispatch();

  const toggleNavMenu = () => {
    dispatch(toggleNavigation());
  };
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="navigation">
          <Logo />
          <NavMenu />
          <div className="side-wrapper">
            <div className="cart-container">
              <button className="cart-container__button" disabled>
                <img src={Cart} />
                <span className="badge">0</span>
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
    </header>
  );
};

export default Navigation;
