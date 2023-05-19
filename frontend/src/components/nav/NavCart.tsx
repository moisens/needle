import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../../hooks/useCart";
import Button from "../button/Button";
import ArticleNavCart from "./ArticleNavCart";

const NavCart = () => {
  const { totalItems, cart, totalPrice } = useCart();

  return (
    <section className="carts-container">
      <MdOutlineShoppingBag size="1.8rem" className="cart-cart-shopping-icon" />
      <div className="cart-count">{totalItems}</div>
      <div className="cart-content">
        <h4 className="cart-heading-4">My Shopping Cart</h4>
        <section className="cart-articles-container">
          <div className="cart-cart-articles">
            {cart.length > 0 ? (
              cart.map((productCart) => {
                const { _id } = productCart;
                return <ArticleNavCart key={_id} {...productCart} />;
              })
            ) : (
              <div className="cart-cart-empty">Your cart is empty</div>
            )}
          </div>
          <div
            className={
              cart.length > 0
                ? "cart-total-cart is-cart-visible"
                : "cart-total-cart"
            }
          >
            <h3>Total: </h3>
            {totalPrice}
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
