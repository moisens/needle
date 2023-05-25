import Button from "../components/button/Button";
import "../components/cart/cart.scss";
import CartArticleComponent from "../components/cart/CartArticleComponent";
import useCart from "../hooks/useCart";

const Cartpage = () => {
  const { cart, totalPrice, totalItems } = useCart();

  return (
    <main className="pages-container">
      <section className="cartpage-container">
        <section className="cart-items-numbers">
          <h3>{`My Cart (${totalItems} ${
            totalItems > 1 ? "items" : "item"
          })`}</h3>
        </section>
        <header className="cart-header">
          <section className="cartpage-articles-container">
            {cart.map((item) => (
              <CartArticleComponent key={item._id} {...item} />
            ))}
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
      </section>
    </main>
  );
};

export default Cartpage;
