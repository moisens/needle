import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const DynamicLinks = () => {
  return (
    <section className="clothes-links">
      <p className="links-links">
        <Link to="/women">Women</Link>
        <span className="links-links active">
          {" "}
          <MdOutlineKeyboardArrowRight size="1.6rem" />
          <Link to="women-clothes">Clothes</Link>
        </span>
        <span className="links-links active">
          <MdOutlineKeyboardArrowRight size="1.6rem" />
          <Link to="jackets">Jackets</Link>
        </span>
      </p>
    </section>
  );
};

export default DynamicLinks;
