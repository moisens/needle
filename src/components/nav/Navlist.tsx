import { NavLink } from "react-router-dom";
import DropdownList from "./DropdownList";
import { navWomenClothes } from "../../utils/linksNav";
import { useState } from "react";

const Navlist = () => {
  const [imageUrl, setImageUrl] = useState<string>("https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?w=1800&t=st=1671723298~exp=1671723898~hmac=d351c7a2a0482bb61ed88b35d33be2ad0346c71a6c6b39a45d2d1f04a85067d4");
  const [isHovered, setIsHovered] = useState(false);

  //useEffect(() => {
  //  document.body.addEventListener('click', closeDropdown);
  //  return () => document.body.removeEventListener('click', closeDropdown)
  //}, []);
  //const closeDropdown = () => setIsHovered(false)

  const handleOnHoverLink = () => setIsHovered(true);
  const handleOnMouseOut = () => setIsHovered(false);

  return (
    <section
      className="linknav-container"
      onMouseOver={() => handleOnHoverLink()}
      onMouseOut={() => handleOnMouseOut()}
    >
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
      <section
        className={
          isHovered ? "dropdown-container isHovered" : "dropdown-container"
        }
      >
        <ul className="dropdown-ul-content">
          <DropdownList links={navWomenClothes} setImageUrl={setImageUrl} />
        </ul>
        <section className="link-image-content">
          <img src={imageUrl} alt="image-link" />
        </section>
      </section>
    </section>
  );
};

export default Navlist;
