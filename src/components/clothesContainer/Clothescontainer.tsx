import "./clothes.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {};

const Clothescontainer = (props: Props) => {
  return (
    <section className="clothes-container">
      <section className="clothes-content">
        <section className="clothes-links">
          <p className="links-links">
            <Link to="/women">Women</Link>
            <span className="links-links active">
              {" "}
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="/women-clothes">Clothes</Link>
            </span>
            <span className="links-links active">
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="/women-clothes">Jackets</Link>
            </span>
          </p>
        </section>
      </section>
    </section>
  );
};

export default Clothescontainer;
