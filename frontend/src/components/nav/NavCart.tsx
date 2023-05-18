import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../../hooks/useCart";

const NavCart = () => {
  const { totalItems } = useCart();

  const handleHoverCart = () => {
    console.log("hovering...");
    
  }

  return (
    <section className="carts-container" onMouseEnter={handleHoverCart}>
      <MdOutlineShoppingBag size="1.875rem" />
      <div className="cart-count">{totalItems}</div>
    </section>
  );
};

export default NavCart;
