import "./Cart.scss";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import ActionButton from "../../UI/ActionButton";

import { AiOutlineClose } from "react-icons/ai/index";

import EmptyCart from "../../../assets/icons/empty-cart.png";

const Cart = ({ onShowCart }) => {
  const cart = useSelector((state) => state.cart.cart);
  const { items, totalAmount, numOfItems } = cart;

  const emptyCartComponent = (
    <div className="empty-cart">
      <p className="empty-cart__text">Cart is currently empty</p>
      <div className="empty-cart__image">
        <img src={EmptyCart} />
      </div>
    </div>
  );

  return (
    <div className="cart-wrapper">
      {/** Overlay */}
      <div className="cart-overlay"></div>
      {/** Cart content */}
      <div className="cart">
        <header className="cart__header">
          <h3 className="cart__title">
            Kosár <span className="colored">tartalma</span>
          </h3>
          <div className="cart__close">
            <button onClick={onShowCart}>
              <AiOutlineClose />
            </button>
          </div>
        </header>
        <div className="cart__content">
          {numOfItems === 0 && emptyCartComponent}
          {numOfItems > 0 && (
            <ul className="product-list">
              {items.map((item) => {
                return <CartItem item={item} key={item.itemData.id} />;
              })}
            </ul>
          )}
        </div>
        <footer className="cart__footer">
          <div className="total">
            <span className="total__text">Részösszeg</span>
            <span className="total__price">{totalAmount} Ft</span>
          </div>
          <form className="checkout">
            <ActionButton variant="primary" title="Tovább a kosárhoz" />
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
