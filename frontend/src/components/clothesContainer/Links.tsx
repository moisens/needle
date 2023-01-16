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
        <div className="crumb" key={crumb}>
          <NavLink className="crumb-link" to={currentLink}>{crumb}</NavLink>
          <SlArrowRight className="arrow-crumb" size="1.3rem" />
        </div>
      );
    });

  return (
    <section className="clothes-links">
      <div className="links-links">{crumbs}</div>
    </section>
  );
};

export default Breadcrumbs;
