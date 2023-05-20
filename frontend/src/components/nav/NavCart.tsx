import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../../hooks/useCart";
import Button from "../button/Button";
import ArticleNavCart from "./ArticleNavCart";
import { useState, useEffect, useRef } from "react";

const NavCart = () => {
  const { totalItems, cart, totalPrice } = useCart();
  const [toggleCart, setToggleCart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnMouseOver = () => {
    setToggleCart(true);
  };

  const handleOnMouseOut = () => {
    const timeout = setTimeout(() => {
      setToggleCart(false);
    }, 3500);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    const container = containerRef.current;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (!container?.contains(e.relatedTarget as Node)) {
        handleOnMouseOut()
      }
    }

    container?.addEventListener('mouseleave', handleMouseLeave)
    return () => container?.removeEventListener('mouseleave', handleMouseLeave)

  }, []);

  return (
    <section
      className={toggleCart ? "carts-container isActive" : "carts-container"}
      onMouseOver={handleOnMouseOver}
      ref={containerRef}
    >
      <MdOutlineShoppingBag size="1.8rem" className="cart-cart-shopping-icon" />
      <div className="cart-count">{totalItems}</div>
      <div className={toggleCart ? "cart-content isVisible" : "cart-content"}>
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
