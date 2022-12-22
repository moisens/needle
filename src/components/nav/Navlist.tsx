import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { navWomenClothes } from "../../utils/linksNav";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

const Navlist = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  //https://img.freepik.com/photos-gratuite/fille-blonde-insouciante-parler-au-telephone-danser-femme-francaise-mode-beret-tenant-smartphone-mur-rouge_197531-14450.jpg?w=1800&t=st=1671206781~exp=1671207381~hmac=1f34e394a5419d612e8a117a170918afd020e53b8b84a16b1563992cf6be313a
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
                <NavLink
                  to={`women/women-clothes/${link.url}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link-item active-item" : "nav-link-item"
                  }
                  onMouseOver={() => setImageUrl(link.image)}
                >
                  {link.text}
                </NavLink>
              </Menu.Item>
            ))}
          </section>
          <section className="image-link-container">
            <section className={`${imageUrl ? "image-link-content" : null}`}>
              {imageUrl ? <img src={imageUrl} alt="image-link" /> : null}
            </section>
          </section>
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
