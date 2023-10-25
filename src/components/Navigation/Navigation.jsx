import "./Navigation.scss";
import Logo from "../UI/Logo";

import Cart from "../../assets/images/grocery-store_64.png";
import Burger from "../../assets/images/burger_64.png";
const Navigation = () => {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="navigation">
          <Logo />
          <div className="menu-wrapper">
            <ul>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
              <li>
                <a>Item</a>
              </li>
            </ul>
          </div>
          <div className="side-wrapper">
            <div className="cart-container">
              <button className="cart-container__button">
                <img src={Cart} />
                <span className="badge">0</span>
              </button>
            </div>
            <div className="burger-container">
              <button className="cart-container__button">
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
