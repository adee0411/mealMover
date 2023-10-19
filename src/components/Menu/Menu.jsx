import "./Menu.scss";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

import Image from "../../assets/images/pexels-engin-akyurt-1437267.jpg";

const Menu = () => {
  return (
    <section className="section">
      <header className="section__header">
        <h1 className="section__title-wrapper">
          <div className="section__icon">
            <MdOutlineRestaurantMenu />
          </div>
          <div className="section__title">
            <span>Our Menu</span>
          </div>
        </h1>
        <p className="section__description">
          Our signature dishes are prepared on-site by our experienced chefs,
          who bring their unique flair and expertise to every meal.
        </p>
      </header>
      <ul className="menu">
        <li className="menu__item menu-card">
          <div className="menu-card__image">
            <a href="#">
              <img src={Image} />
            </a>
          </div>
          <div className="menu-card__body">
            <a href="#">Pasta Classic</a>
            <p className="menu-card__ingredients">
              Two meatballs, onion, pickles, cabbage, sauce, salad, bun, onion
            </p>
          </div>
          <footer className="menu-card__footer">
            <span className="menu-card__price">$ 14.99</span>
          </footer>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
