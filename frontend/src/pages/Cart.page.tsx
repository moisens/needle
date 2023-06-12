//import { useState } from "react";
import Button from "../components/button/Button";
import "../components/cart/cart.scss";
import CartArticleComponent from "../components/cart/CartArticleComponent";
import useCart from "../hooks/useCart";

const Cartpage = () => {
  const { cart, totalPrice, totalItems } = useCart();

  return (
    <main className="pages-container">
      <section className="cartpage-container">
        <section
          className={`${
            totalItems <= 0
              ? "cart-items-numbers hidden-number"
              : "cart-items-numbers"
          }`}
        >
          <h3>{`My Cart (${totalItems} ${
            totalItems > 1 ? "items" : "item"
          })`}</h3>
        </section>
        {totalItems > 0 ? (
          <header className="cart-header">
            <section className="cartpage-articles-container">
              {cart.map((item) => (
                <CartArticleComponent key={item._id} item={item} />
              ))}
              <div className="articles-items-infos">
                <p>Items in the shopping cart are not reserved!</p>
              </div>
            </section>
            <section className="cartpage-total-container">
              <div className="checkout-product-content">
                <h3 className="checkout-h3">Total</h3>
                <div>
                  <p>Subtotal</p>
                  <p className="price-checkout">{totalPrice}</p>
                </div>
                <div>
                  <p>Shipping</p>
                  <p className="price-checkout">0,00 €</p>
                </div>
                <div>
                  <p>
                    <span className="total-bold">Total</span>{" "}
                    <span className="checkoout-tax">(including vta)</span>
                  </p>
                  <p className="price-checkout">{totalPrice}</p>
                </div>
                <Button as="button" className="checkout-btn">
                  Checkout
                </Button>
              </div>
            </section>
          </header>
        ) : (
          <section className="cart-empty">
            <div className="cart-emty-template">
              <div className="fake-img-square"></div>
              <div className="fake-text-section">
                <div className="fake-text-line"></div>
                <div className="fake-text-line short"></div>
                <div className="fake-img-container">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="fake-btn">+</div>
              </div>
            </div>
            <div className="cart-emty-infos">
              <h4 className="cart-emty-h4">Your cart is empty!</h4>
              <p>Would you like to add some products?</p>
              {/* //TODO: conditionally change the text: user ? 'something' : 'something else' */}
              <Button as="button" className="empty-btn-btn">
                Connect
              </Button>
              {/* //TODO: conditionally change the Button text: user ? 'Go to Homepage' : 'something else' */}
            </div>
          </section>
        )}
        {/*Last viewed products section goes here!*/}
      </section>
    </main>
  );
};

export default Cartpage;
