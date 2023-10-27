import "./ProductDetailPage.scss";

import Image from "../../assets/images/pexels-robin-stickel-70497.jpg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai/index";

const ProductDetailPage = () => {
  return (
    <>
      <div className="product-detail-page-wrapper">
        <div className="product-detail-wrapper">
          <header className="product-detail-wrapper__header">
            <div className="product-image-wrapper">
              <div className="product-image-wrapper__image">
                <img src={Image} />
              </div>
              <div className="product-image-wrapper__image">
                <img src={Image} />
              </div>
              <button className="btn-pagination btn-pagination--left">
                <AiFillCaretLeft />
              </button>
              <button className="btn-pagination btn-pagination--right">
                <AiFillCaretRight />
              </button>
            </div>
          </header>
          <div className="product-detail-wrapper__content">
            <h2 className="product-detail-wrapper__product-title">
              Double Cheeseburger with Potato
            </h2>
            <div className="product-detail-wrapper__details">
              <h3>Details</h3>
              <p>
                Two meatballs, onion, pickles, cabbage, sauce, salad, bun, onion
              </p>
            </div>
            <div className="product-detail-wrapper__price">
              <h3>Price</h3>
              <p>$ 19.99</p>
            </div>
            <div className="product-detail-wrapper__add-to-cart">
              <form className="add-to-cart-form">
                <h3>Quantity</h3>
                <div className="input-wrapper">
                  <input type="number" name="quantity" id="quantity" />
                  <button>Add to cart</button>
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
