import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { navWomenClothes } from "../../utils/linksNav";
import { RiArrowDownSFill } from "react-icons/ri"

const Navlist = () => {
  return (
    <ul className="uls-list">
      <Menu>
        <Menu.Button className="btn-btn-menu">
          <li>
            <NavLink
              to="women/women-clothes/clothes"
              className={({ isActive }) =>
                isActive ? "li-a activeLink" : "li-a"
              }
            >
              Clothes
            </NavLink>
          </li>
          <RiArrowDownSFill />
        </Menu.Button>
        <Menu.Items className="menu-items">
          <section className="menu-item">
          {navWomenClothes.map((link) => (
            <Menu.Item key={link.id}>
              <NavLink to={`women/women-clothes/${link.url}`} className={({ isActive }) => isActive ? 'nav-link-item active-item' : 'nav-link-item'}>
                {link.text}
              </NavLink>
            </Menu.Item>
          ))}
          </section>
          <section>Image</section>
        </Menu.Items>
      </Menu>
      <Menu>
      <Menu.Button className="btn-btn-menu">
          <li>
            <NavLink
              to="women/women-shoes"
              className={({ isActive }) =>
                isActive ? "li-a activeLink" : "li-a"
              }
            >
              Shoes
            </NavLink>
          </li>
        </Menu.Button>
        <Menu.Items>
          {navWomenClothes.map((link) => (
            <Menu.Item key={link.id}>
              <NavLink to={link.url}>{link.text}</NavLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </ul>
  );
};

export default Navlist;
