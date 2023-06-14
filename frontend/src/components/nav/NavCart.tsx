import useCart from "../../hooks/useCart";
import { IProducts } from "../../types/typeDatas";
import Button from "../button/Button";
import ArticleNavCart from "./ArticleNavCart";
import { Link } from "react-router-dom";

export type CartLikeNavType = {
  prods: IProducts[],
  toggleCart: boolean,

}

const NavCart = ({ prods, toggleCart }: CartLikeNavType) => {
  const { totalPrice } = useCart();

  return (
    <section
      className="cart-like-content"
      
    >
      <div className={toggleCart ? "cart-content isVisible" : "cart-content"}>
        <h4 className="cart-heading-4">My Shopping Cart</h4>
        <section className="cart-articles-container">
          <div className="cart-cart-articles">
            {prods.length > 0 ? (
              prods.map((productCart) => {
                const { _id } = productCart;
                return <ArticleNavCart key={_id} {...productCart} />;
              })
            ) : (
              <div className="cart-cart-empty">Your cart is empty</div>
            )}
          </div>
          <div
            className={
              prods.length > 0
                ? "cart-total-cart is-cart-visible"
                : "cart-total-cart"
            }
          >
            <h3>Total: </h3>
            {totalPrice}
          </div>
          <Button as="button" className="cart-btn-btn">
            <Link to="/cart"> Go To Cart</Link>
          </Button>
        </section>
      </div>
    </section>
  );
};

export default NavCart;
