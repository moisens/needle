import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";
import Navlist from "./Navlist";
import { Outlet } from "react-router-dom";



const Nav = () => {
  return (
    <>
      <nav className="navbar-container">
        <section className="logo">needle</section>
        <section className="nav-content">
          <Listcategories />
          <Navlist />
          <section className="fav-cart-user">
            <section className="favorites-container">
              <AiOutlineHeart size="1.875rem" />
              <section className="favorites-count">8</section>
            </section>
            <section className="carts-container">
              <MdOutlineShoppingBag size="1.875rem" />
              <section className="cart-count">2</section>
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
