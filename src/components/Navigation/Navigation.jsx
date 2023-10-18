import "./Navigation.scss";
import Logo from "../../assets/images/taco_128_primary.png";
import Cart from "../../assets/images/grocery-store_64.png";
import Burger from "../../assets/images/burger_64.png";
const Navigation = () => {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="navigation">
          <a href="#" className="logo-container">
            <div className="logo-container__img">
              {" "}
              <img src={Logo} />
            </div>
            <span className="logo-container__text">MealMover</span>
          </a>
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
