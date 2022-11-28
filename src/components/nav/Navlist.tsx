import { womenLinks } from "../../utils/linksNav";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Navlist = (props: Props) => {
  return (
    <ul className="uls-list">
      {womenLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className={({ isActive }) => isActive ? "li-a activeLink" : "li-a"}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlist;
