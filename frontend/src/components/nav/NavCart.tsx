import useCart from "../../hooks/useCart";
import { IProducts } from "../../types/typeDatas";
import Button from "../button/Button";
import ArticleNavCart from "./ArticleNavCart";
import { Link } from "react-router-dom";

export type CartLikeNavType = {
  prods: IProducts[];
  isHovered: {
    likeItem: boolean;
    cartItem: boolean;
  };
};

const NavCart = ({ prods, isHovered }: CartLikeNavType) => {
  const { totalPrice } = useCart();

  const classHideAndShowPrice = (): string => {
    return prods.length > 0
      ? "cart-total-cart is-cart-visible "
      : "cart-total-cart";
  };

  return (
    <section className="cart-like-content">
      <h4 className="cart-heading-4">
        {isHovered.likeItem ? "My wishlist " : "My shopping cart"}
      </h4>
      <section className="cart-articles-container">
        <div className="cart-cart-articles">
          {prods.length > 0 ? (
            prods.map((item) => {
              const { _id } = item;
              return <ArticleNavCart key={_id} {...item} />;
            })
          ) : (
            <div className="cart-cart-empty">
              {isHovered.likeItem
                ? "Your wishlist is empty"
                : "Your cart is empty"}
            </div>
          )}
        </div>
        <div
          className={
            isHovered.likeItem
              ? "cart-total-in-favorite"
              : classHideAndShowPrice()
          }
        >
          <h3>Total: </h3>
          {totalPrice}
        </div>
        <Button as="button" className="cart-btn-btn is visible">
          <Link to={isHovered.likeItem ? "/wishlist" : "/cart"}>
            {isHovered.likeItem ? "Go To Wishlist" : "Go To Cart"}
          </Link>
        </Button>
      </section>
    </section>
  );
};

export default NavCart;
