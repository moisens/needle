import { MdOutlineShoppingBag } from "react-icons/md";
import useCart from "../../hooks/useCart";


const NavCart = () => {
  const { totalItems } = useCart();
  console.log("totalItem NAV", totalItems);
  
  return (
    <section className="carts-container">
      <MdOutlineShoppingBag size="1.875rem" />
      <div className="cart-count">{totalItems}</div>
    </section>
  );
};

export default NavCart;
