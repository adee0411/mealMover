import "./MenuCard.scss";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

const MenuCard = ({ title, ingredients, price, image }) => {
  return (
    <div className="menu-card">
      <a href="#">
        <div className="menu-card__image">
          <img src={image} alt={title} />
          <div className="center-icon">
            <MdOutlineRestaurantMenu />
          </div>
        </div>
      </a>

      <div className="menu-card__body">
        <a href="#">{title}</a>
        <p className="menu-card__ingredients">{ingredients} </p>
      </div>
      <footer className="menu-card__footer">
        <span className="menu-card__price">$ {price}</span>
      </footer>
    </div>
  );
};

export default MenuCard;
