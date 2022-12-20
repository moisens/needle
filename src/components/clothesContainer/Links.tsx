import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useMaincategory  from "../../hooks/useMaincategory";



const DynamicLinks = () => {
  const { selectedCategory } = useMaincategory();
  const location = useLocation();
  //console.log(location.pathname.replace(/\/+$/, ""));
  
  

  return (
    <section className="clothes-links">
      <p className="links-links">
        <Link to={`/${selectedCategory}`}>Women</Link>
        <span className="links-links active">
          {" "}
          <MdOutlineKeyboardArrowRight size="1.6rem" />
          <Link to="clothes">Clothes</Link>
        </span>
        <span className="links-links active">
          <MdOutlineKeyboardArrowRight size="1.6rem" />
          <Link to="#">{location.pathname.slice(-7).replace(/\/$/, "")}</Link>
        </span>
      </p>
    </section>
  );
};

export default DynamicLinks;
