import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";
import Navlist from "./Navlist";
import { Outlet } from "react-router-dom";
import NavCart from "./NavCart";
import useCart from "../../hooks/useCart";
import { MdOutlineShoppingBag } from "react-icons/md";
import useLike from "../../hooks/useLike";
import useHover from "../../hooks/useHover";

const Nav = () => {
  const { totalItems, cart } = useCart();
  const { like, totalLikes } = useLike();
  const { isHovered, handleOnHover, handleOnMouseOut } = useHover();

  return (
    <>
      <nav className="navbar-container">
        <section className="logo">needle</section>
        <section className="nav-content">
          <Listcategories />
          <Navlist />
          <section className="fav-cart-user">
            <section
              className="carts-favorites-container"
              onMouseOver={() => handleOnHover("likeItem")}
              onMouseOut={() => handleOnMouseOut("likeItem")}
            >
              <AiOutlineHeart
                size="1.875rem"
                className="cart-cart-shopping-icon"
              />
              <section
                className={
                  totalLikes > 0 ? "cart-count isVisible" : "cart-count"
                }
              >
                {totalLikes}
              </section>
              <div
                className={
                  isHovered.likeItem ? "cart-content isVisible" : "cart-content"
                }
              >
                <NavCart prods={like} isHovered={isHovered} />
              </div>
            </section>
            <section
              className="carts-favorites-container"
              onMouseOver={() => handleOnHover("cartItem")}
              onMouseOut={() => handleOnMouseOut("cartItem")}
            >
              <MdOutlineShoppingBag
                size="1.8rem"
                className="cart-cart-shopping-icon"
              />
              <div
                className={
                  totalItems > 0 ? "cart-count isVisible" : "cart-count"
                }
              >
                {totalItems}
              </div>
              <div
                className={
                  isHovered.cartItem ? "cart-content isVisible" : "cart-content"
                }
              >
                <NavCart prods={cart} isHovered={isHovered} />
              </div>
            </section>

            <section className="user-container">
              <CgProfile size="1.875rem" />
            </section>
          </section>
        </section>
      </nav>
      <main className="pages-container">
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
