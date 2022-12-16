import "./headerslide.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Button from "../button/Button";
import { slidersWomen } from "../../utils/slidersData"
import Caroussel from "./Caroussel";



const HeaderSlide = () => {
  return (
    <header className="header-container">
      <section className="header-header">
        <section className="sliders-content">
          <section className="slide-text">
            <h1 className="header-titleH1">
              Feel and look glamorous this spring.
            </h1>
            <h3 className="header-titleH3">New look, simply you.</h3>
          </section>
          <Caroussel sliders={slidersWomen} />
        </section>
        <section className="btns-container">
          <Button as="button" className="btns-btns" handleClick={() => {}}>
            <MdOutlineKeyboardArrowLeft color="#fff" size="4rem" />
          </Button>
          <Button as="button" className="btns-btns" handleClick={() => {}}>
            <MdOutlineKeyboardArrowRight color="#fff" size="4rem" />
          </Button>
        </section>
      </section>
    </header>
  );
};

export default HeaderSlide;
