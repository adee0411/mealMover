import "./CartItem.scss";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import { updateItem, removeItem } from "../../../store/cartSlice";

import NumberInput from "../../UI/NumberInput";

const CartItem = ({ item }) => {
  const { quantity, itemTotal } = item;
  const { image_url, title, id } = item.itemData;
  const productQuantityRef = useRef();
  const dispatch = useDispatch();

  const handleQuantityIncrease = (e) => {
    productQuantityRef.current.value++;
    dispatch(updateItem({ id, quantity: +productQuantityRef.current.value }));
  };

  const handleQuantityDecrease = (e) => {
    productQuantityRef.current.value--;
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
          <h4 className="product-details__title">
            {title}
            <span className="product-details__quantity">(x{quantity})</span>
          </h4>
          <p className="product-details__price">{itemTotal} Ft</p>
          <form className="product-details__action">
            <button className="remove-product" onClick={handleRemoveItem}>
              Eltávolít
            </button>
          </form>
        </div>
        <div className="number-input-container">
          <NumberInput
            readOnly
            defaultValue={quantity}
            onHandleDecrease={handleQuantityDecrease}
            onHandleIncrease={handleQuantityIncrease}
            ref={productQuantityRef}
            min={1}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
