import { NavLink, useLocation } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = `/${crumb}`;
      return (
        <div className="crumb">
          <NavLink className="crumb-link" to={currentLink}>{crumb}</NavLink>
          <SlArrowRight className="arrow-crumb" size="1.3rem" />
        </div>
      );
    });

  return (
    <section className="clothes-links">
      <p className="links-links">{crumbs}</p>
    </section>
  );
};

export default Breadcrumbs;
