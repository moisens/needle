import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";

type Props = {};


const Nav = (props: Props) => {

  return (
    <nav className="navbar-container">
      <div className="logo">needle</div>
      <div className="nav-content">
        <Listcategories />
        <ul className="uls-list">
          <li>Home</li>
          <li>Clothes</li>
          <li>Shoes</li>
        </ul>
        <div className="fav-cart-user">
          <div className="favorites-container">
            <AiOutlineHeart size="1.8rem" />
          </div>
          <div className="carts-container">
            <MdOutlineShoppingBag size="1.8rem" />
          </div>
          <div className="user-container">
            <CgProfile size="1.8rem" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
