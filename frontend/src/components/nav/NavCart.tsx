import Images from "../imageComponent/Images";
import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../../hooks/useCart";
import Button from "../button/Button";

const NavCart = () => {
  const { totalItems, cart } = useCart();

  return (
    <section className="carts-container">
      <MdOutlineShoppingBag size="1.8rem" className="cart-cart-shopping-icon" />
      <div className="cart-count">{totalItems}</div>
      <div className="cart-content">
        <h4 className="cart-heading-4">My Shopping Cart</h4>
        <section className="cart-articles-container">
          <div className="cart-cart-articles">
            <article className="cart-article-content">
              <div className="cart-image-content">
                <Images src="" alt="" title="" />
              </div>
              <div className="cart-infos-container">
                <div>
                  <p className="cart-p">Van Brughel</p>
                  <p className="cart-p">Size: Medium</p>
                  <p className="cart-p">Quantity: 1</p>
                </div>
                <div className="cart-price">
                  <p className="cart-p">€1800</p>
                </div>
                <div className="cart-functionality">
                  <div>
                    <p className="cart-p">Move to Favorite</p>
                  </div>
                  <div>
                    <p className="cart-p">Delete</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <Button as="button" className="cart-btn-btn">
            Go To Cart
          </Button>
        </section>
      </div>
    </section>
  );
};

export default NavCart;
