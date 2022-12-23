import { NavLink } from "react-router-dom";
//import { navWomenClothes } from "../../utils/linksNav";
//import { useState } from "react";

const Navlist = () => {
  //const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <ul className="uls-list">
      <li className="list-li">
        <NavLink
          to="women/women-clothes/clothes"
          className={({ isActive }) =>
            isActive ? "list-a activeLink" : "list-a"
          }
        >
          Clothes
        </NavLink>
      </li>
      <li className="list-li">
        <NavLink
          to="women/women-shoes"
          className={({ isActive }) =>
            isActive ? "list-a activeLink" : "list-a"
          }
        >
          Shoes
        </NavLink>
      </li>
      <li className="list-li">
        <NavLink
          to="women/stories"
          className={({ isActive }) =>
            isActive ? "list-a activeLink" : "list-a"
          }
        >
          Stories
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlist;

/*

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

*/
