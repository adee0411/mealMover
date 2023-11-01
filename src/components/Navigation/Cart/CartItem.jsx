import "./CartItem.scss";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import { updateItem, removeItem } from "../../../store/cartSlice";

const CartItem = ({ item }) => {
  const { quantity, itemTotal } = item;
  const { image_url, title, id } = item.itemData;
  const productQuantityRef = useRef();
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    if (+e.target.value < 1) {
      e.target.value = 1;
    }
    dispatch(updateItem({ id, quantity: +productQuantityRef.current.value }));
  };

  const handleRemoveItem = (e) => {
    e.preventDefault();
    dispatch(removeItem(id));
  };

  return (
    <li className="product-list__item">
      <div className="item-wrapper">
        <div className="img-cont">
          <img src={image_url} />
        </div>
        <div className="product-details">
          <h4 className="product-details__title">{title}</h4>
          <p className="product-details__price">{itemTotal} Ft</p>
          <form className="product-details__action">
            <button className="remove-product" onClick={handleRemoveItem}>
              Remove
            </button>
          </form>
        </div>
      </div>
      <form className="quantity-form">
        <input
          type="number"
          value={quantity}
          name="product-quantity"
          onChange={handleQuantityChange}
          ref={productQuantityRef}
        />
      </form>
    </li>
  );
};

export default CartItem;
