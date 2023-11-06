import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";

import "./ProductDetailPage.scss";

import NumberInput from "../../components/UI/NumberInput";
import ActionButton from "../../components/UI/ActionButton";

import { addItem } from "../../store/cartSlice";
import { addCartAnimation } from "../../store/navigationSlice";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const productQuantityRef = useRef(1);

  const params = useParams();
  const productID = params.productID;

  const allMenu = useSelector((state) => state.menuFilter.allMenu);
  const allMenuArr = Object.values(allMenu).flat();

  const menuToRender = allMenuArr.find((el) => el.id === productID);
  const detailsString = menuToRender.details.join(", ");
  const formattedDetails =
    detailsString[0].toUpperCase() + detailsString.slice(1);

  const handleQuantityDecrease = (e) => {
    productQuantityRef.current.value--;
  };

  const handleQuantityIncrease = (e) => {
    productQuantityRef.current.value++;
  };

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    if (!productQuantityRef.current.value) {
      productQuantityRef.current.value = 1;
      return;
    } else {
      const item = {
        quantity: +productQuantityRef.current.value,
        itemData: { ...menuToRender },
        itemTotal: +productQuantityRef.current.value * menuToRender.price,
      };
      dispatch(addItem(item));
      dispatch(addCartAnimation(true));
    }
  };

  return (
    <>
      <div className="product-detail-page-wrapper">
        <div className="product-detail-wrapper">
          <header className="product-detail-wrapper__header">
            <div className="product-image-wrapper">
              <div className="product-image-wrapper__image">
                <img src={menuToRender.image_url} />
              </div>
            </div>
          </header>
          <div className="product-detail-wrapper__content">
            <h2 className="product-detail-wrapper__product-title">
              {menuToRender.title}
            </h2>
            <div className="product-detail-wrapper__details">
              <h3>Összetevők</h3>
              <p>{formattedDetails}</p>
            </div>
            <div className="product-detail-wrapper__price">
              <h3>Ár</h3>
              <p>{menuToRender.price} Ft</p>
            </div>
            <div className="product-detail-wrapper__add-to-cart">
              <form className="add-to-cart-form">
                <h3>Mennyiség</h3>
                <div className="actions">
                  <div className="actions__number-input-container">
                    <NumberInput
                      readOnly
                      ref={productQuantityRef}
                      onHandleDecrease={handleQuantityDecrease}
                      onHandleIncrease={handleQuantityIncrease}
                      defaultValue={1}
                      min={1}
                    />
                  </div>
                  <div className="actions__button-container">
                    <ActionButton
                      variant="primary"
                      onHandleAction={handleAddItemToCart}
                      title="Kosárba"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
