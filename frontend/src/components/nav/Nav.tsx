import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";
import Navlist from "./Navlist";
import { Outlet } from "react-router-dom";
import NavCart from "./NavCart";
//import { ProductCartProvider } from "../../context/CartContext";

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
              <NavCart />
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
