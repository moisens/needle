import { womenLinks } from "../../utils/linksNav";
import { Link } from "react-router-dom";

type Props = {};

const Navlist = (props: Props) => {
  return (
    <ul className="uls-list">
      {womenLinks.map((link) => {
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

export default Navlist;
