import { NavLink } from "react-router-dom";
import { LinkProps } from "../../types/typeLinks";

const AsidenavList = ({ links }: LinkProps) => {
  return (
    <ul className="clothes-ul">
      <li className="clothes-li">
        <NavLink
          to="/women-clothes"
          className={({ isActive }) =>
            isActive ? "clothes-li a activeSideLink" : "clothes-li a"
          }
        >
          Clothes
        </NavLink>
      </li>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li className="clothes-li" key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? "clothes-li a activeSideLink" : "clothes-li a"
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

export default AsidenavList;
