import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";
import Navlist from "./Navlist";
import { Outlet } from "react-router-dom";
import NavCart from "./NavCart";
import useCart from "../../hooks/useCart";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const { totalItems, cart } = useCart();
  const [toggleCart, setToggleCart] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnMouseOver = () => {
    setToggleCart(true);
  };

  const handleOnMouseOut = () => {
    const timeout = setTimeout(() => {
      setToggleCart(false);
    }, 500);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseLeave = (e: MouseEvent) => {
      if (container?.contains(e.relatedTarget as Node)) {
        handleOnMouseOut();
      }
    };

    container?.addEventListener("mouseleave", handleMouseLeave);
    return () => container?.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <>
      <nav className="navbar-container">
        <section className="logo">needle</section>
        <section className="nav-content">
          <Listcategories />
          <Navlist />
          <section className="fav-cart-user">
            <section className="carts-favorites-container">
              <AiOutlineHeart size="1.875rem" />
              <section className="favorites-count">8</section>
              {/* <NavCart  /> */}
            </section>
            <section
              className="carts-favorites-container"
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseOut}
              ref={containerRef}
            >
              <MdOutlineShoppingBag
                size="1.8rem"
                className="cart-cart-shopping-icon"
              />
              <div className="cart-count">{totalItems}</div>
              <NavCart prods={cart} toggleCart={toggleCart} />
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
