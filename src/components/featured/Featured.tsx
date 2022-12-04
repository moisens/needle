import "./featured.scss";
import Button from "../button/Button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Womaninblue from "../../assets/woman-in-blue.png";
import Pinklady from "../../assets/pink-lady.png";
import Laura from "../../assets/laura.png";

type Props = {};

const Featured = (props: Props) => {
  return (
    <section className="featured-container">
      <section className="featured-content">
        <h2 className="featured-titleH2">Featured tailors & designers</h2>
        <section className="slide-container">
          <section className="slide-content">
            <section className="slide-image">
              <img
                src={Womaninblue}
                alt="woman-in-blue"
                title="woman-in-blue"
              />
            </section>
            <h3 className="slide-titleH3">Tailor's Name</h3>
            <p className="color">color</p>
            <p className="price">€&nbsp;500</p>
          </section>
          <section className="slide-content">
            <section className="slide-image">
              <img src={Pinklady} alt="woman-in-blue" title="woman-in-blue" />
            </section>
            <h3 className="slide-titleH3">Tailor's Name</h3>
            <p className="color">color</p>
            <p className="price">€&nbsp;500</p>
          </section>
          <section className="slide-content">
            <section className="slide-image">
              <img src={Laura} alt="woman-in-blue" title="woman-in-blue" />
            </section>
            <h3 className="slide-titleH3">Tailor's Name</h3>
            <p className="color">color</p>
            <p className="price">€&nbsp;500</p>
          </section>
          <section className="slide-content">
            <section className="slide-image">
              <img
                src={Womaninblue}
                alt="woman-in-blue"
                title="woman-in-blue"
              />
            </section>
            <h3 className="slide-titleH3">Tailor's Name</h3>
            <p className="color">color</p>
            <p className="price">€&nbsp;500</p>
          </section>
        </section>
        <Button as="button" className="slide-btn" handleClick={() => {}}>
          <MdOutlineKeyboardArrowLeft size="2.5rem" color="#fff" />
        </Button>
      </section>
    </section>
  );
};

export default Featured;
