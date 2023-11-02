import { Link } from "react-router-dom";

import "./MenuCard.scss";

import { MdOutlineRestaurantMenu } from "react-icons/md/index";

const MenuCard = ({ title, details, price, image, id }) => {
  const formattedDetails = details.join(", ").toLowerCase();
  const capitalizedDetails =
    formattedDetails[0].toUpperCase() + formattedDetails.slice(1);
  console.log(id);
  return (
    <div className="menu-card">
      <Link to={`/${id}`}>
        <div className="menu-card__image">
          <img src={image} alt={title} />
          <div className="center-icon">
            <MdOutlineRestaurantMenu />
          </div>
        </div>
      </Link>

      <div className="menu-card__body">
        <Link to={`/${id}`}>{title}</Link>
        <p className="menu-card__ingredients">{capitalizedDetails} </p>
      </div>
      <footer className="menu-card__footer">
        <span className="menu-card__price">{price} Ft</span>
      </footer>
    </div>
  );
};

export default MenuCard;
