import "./headerslide.scss";
import { slidersWomen } from "../../utils/slidersData";
import Caroussel from "./Caroussel";

const HeaderSlide = () => {
  return (
    <header className="header-container">
      <Caroussel sliders={slidersWomen} />
    </header>
  );
};

export default HeaderSlide;
