import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./MenuCard.scss";

import { addItem } from "../../store/cartSlice";
import { addCartAnimation } from "../../store/navigationSlice";

import { CgDetailsMore } from "react-icons/cg/index";
import { FaShoppingCart } from "react-icons/fa/index";

const MenuCard = ({ title, details, price, image_url, id }) => {
  const dispatch = useDispatch();

  const formattedDetails = details.join(", ").toLowerCase();
  const capitalizedDetails =
    formattedDetails[0].toUpperCase() + formattedDetails.slice(1);

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const item = {
      quantity: 1,
      itemData: { title, details, price, id, image_url },
      itemTotal: price,
    };

    dispatch(addItem(item));
    dispatch(addCartAnimation(true));
  };

  return (
    <div className="menu-card">
      <div className="menu-card__image">
        <img src={image_url} alt={title} />
        <div className="menu-card__actions">
          <div className="details">
            <Link to={`/${id}`} className="button button--details">
              <span className="button__icon">
                <CgDetailsMore />
              </span>
              <span className="button__title">Részletek</span>
            </Link>{" "}
          </div>
          <div className="add-to-cart">
            <button
              className="button button--add-to-cart"
              onClick={handleAddItemToCart}
            >
              <span className="button__icon">
                <FaShoppingCart />
              </span>
              <span className="button__title">Kosárba</span>
            </button>
          </div>
        </div>
      </div>

      <div className="menu-card__body">
        <Link to={`/${id}`} className="menu-card__title">
          {title}
        </Link>
        <p className="menu-card__ingredients">{capitalizedDetails} </p>
      </div>
      <footer className="menu-card__footer">
        <span className="menu-card__price">{price} Ft</span>
      </footer>
    </div>
  );
};

export default MenuCard;
