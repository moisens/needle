import Button from "../components/button/Button";
import "../components/cart/cart.scss";
import Images from "../components/imageComponent/Images";

const Cartpage = () => {
  return (
    <main className="pages-container">
      <section className="cartpage-container">
        <section className="cart-items-numbers">
          <h3>My Cart (3 items)</h3>
        </section>
        <header className="cart-header">
          <section className="cartpage-articles-container">
            <article className="articles-content">
              <div className="article-image-container">
                <Images src="" alt="Cart" title="cart" />
              </div>
              <div className="article-infos-container">
                <div className="article-articles">
                  <div className="article-infos-content">
                    <h3>Tailor name</h3>
                    <p>color: red</p>
                    <p>size: L</p>
                  </div>
                  <div className="article-form-content">
                    <label htmlFor="item-number" />
                    <input type="number" />
                  </div>
                </div>
                <div className="article-infos-price">
                  <div className="article-delete-moveto">
                    <p>delete</p>
                    <p>Move to Price</p>
                  </div>
                  <p className="article-total-price">3800€</p>
                </div>
              </div>
            </article>
          </section>
          <section className="cartpage-total-container">
            <div className="checkout-product-content">
              <h3 className="checkout-h3">Total</h3>
              <div>
                <p>Subtotal</p>
                <p className="price-checkout">500€</p>
              </div>
              <div>
                <p>Shipping</p>
                <p className="price-checkout">0.00€</p>
              </div>
              <div>
                <p>
                  <span className="total-bold">Total</span>{" "}
                  <span className="checkoout-tax">(including vta)</span>
                </p>
                <p className="price-checkout">5000€</p>
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
