import { navWomenClothes } from "../../utils/linksNav"
import AsidenavList from "./AsidenavList";

const Asidenav = () => {
  return (
    <nav className="sidebar-clothes-page">
      <AsidenavList links={navWomenClothes} />
    </nav>
  );
};

export default Asidenav;
