import { SubLinkDropdown } from "../../types/typeLinks";
import { NavLink } from "react-router-dom";

const DropdownList = ({ links, setImageUrl }: SubLinkDropdown) => {
  return (
    <>
      {links.map((link) => (
        <li className="dropdown-li" key={link.id}>
          <NavLink
            to={`women-clothes/${link.url}`}
            className={({ isActive }) =>
              isActive ? "dropdown-li-a activeLink" : "dropdown-li-a"
            }
            onMouseOver={() => setImageUrl(link.image)}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default DropdownList;
