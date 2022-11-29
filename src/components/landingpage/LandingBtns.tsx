import { Link } from "react-router-dom";
import { linksBtns } from "../../utils/categories";
import Button from "../button/Button";

type Props = {};

const LandingBtns = (props: Props) => {
  return (
    <div className="discover-btns">
      {linksBtns.map((btn) => {
        const { id, url, text, arias} = btn;
        return (
          <Button
            as="button"
            className="btn-btndiscover"
            handleClick={() => {}}
            aria-label={arias}
            key={id}
          >
            <Link to={url}>{text}</Link>
          </Button>
        );
      })}
    </div>
  );
};

export default LandingBtns;
