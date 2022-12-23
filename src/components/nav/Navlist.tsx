import { NavLink } from "react-router-dom";
import { navWomenClothes } from "../../utils/linksNav";
import { useState, useEffect } from "react";

const Navlist = () => {
  //const [imageUrl, setImageUrl] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  //useEffect(() => {
  //  document.body.addEventListener('click', closeDropdown);
  //  return () => document.body.removeEventListener('click', closeDropdown)
  //}, []);
  //const closeDropdown = () => setIsHovered(false)

  const handleOnHoverLink = () => setIsHovered(true);
  const handleOnMouseOut = () => setIsHovered(false);

  return (
    <section className="linknav-container">
      <ul className="uls-list">
        <li
          className="list-li"
          onMouseOver={() => handleOnHoverLink()}
          onMouseOut={() => handleOnMouseOut()}
        >
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
      <section
        className={
          isHovered ? "dropdown-container isHovered" : "dropdown-container"
        }
      >
        <ul className="dropdown-ul-content">
          {navWomenClothes.map((link) => (
            <li className="dropdown-li" key={link.id}>
              <NavLink
                to={`/women/women-clothes/${link.url}`}
                className={({ isActive }) =>
                  isActive ? "dropdown-li-a activeLink" : "dropdown-li-a"
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <section className="link-image-content">
          <img src="" alt="image-link" />
        </section>
      </section>
    </section>
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
