import { NavLink } from "react-router-dom";
import { LinkProps } from "../../types/typeLinks";

const Navlist = ({ links }: LinkProps) => {
  return (
    <ul className="uls-list">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? "li-a activeLink" : "li-a"
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlist;
