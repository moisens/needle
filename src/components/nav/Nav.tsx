import "./nav.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Listcategories from "./Listcategories";
import Navlist from "./Navlist";

type Props = {};


const Nav = (props: Props) => {

  return (
    <nav className="navbar-container">
      <div className="logo">needle</div>
      <div className="nav-content">
        <Listcategories />
        <Navlist />
        <div className="fav-cart-user">
          <div className="favorites-container">
            <AiOutlineHeart size="1.5rem" />
          </div>
          <div className="carts-container">
            <MdOutlineShoppingBag size="1.5rem" />
          </div>
          <div className="user-container">
            <CgProfile size="1.5rem" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
