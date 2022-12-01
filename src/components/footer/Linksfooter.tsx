import { Link } from "react-router-dom";
import { LinkProps } from "../../types/typeLinks";

const Linksfooter = ({ links }: LinkProps) => {
  return (
    <ul className="ul-links">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Linksfooter;
