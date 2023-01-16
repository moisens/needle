import { Sliderdata } from "../../types/typeSlides";
import Images from "../imageComponent/Images";
import useSlidebtns from "../../hooks/useSlidebtns";
import Button from "../button/Button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Caroussel = ({ sliders }: Sliderdata) => {
  const { index, setIndex } = useSlidebtns({ sliders });

  return (
    <section className="header-header">
      <div className="slider-container">
        <section className="slide-slide-content">
          {sliders.map((slide, slideIndex) => {
            const { id, title, subtitle, image } = slide;

            let position = "nextSlide";
            //active index
            if (slideIndex === index) {
              position = "activeSlide";
            }
            //last slide
            if (
              slideIndex === index - 1 ||
              (index === 0 && slideIndex === sliders.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <section className={`sliders-content ${position}`} key={id}>
                <section className="slide-text">
                  <h1 className="header-titleH1">{title}</h1>
                  <h3 className="header-titleH3">{subtitle}</h3>
                </section>
                <section className="slide-images">
                  <Images src={image} alt="slide-image" />
                </section>
              </section>
            );
          })}
        </section>
      </div>

      <section className="btns-container">
        <Button
          as="button"
          className="btns-btns"
          handleClick={() => setIndex(index - 1)}
        >
          <MdOutlineKeyboardArrowLeft color="#fff" size="4rem" />
        </Button>
        <Button
          as="button"
          className="btns-btns"
          handleClick={() => setIndex(index + 1)}
        >
          <MdOutlineKeyboardArrowRight color="#fff" size="4rem" />
        </Button>
      </section>
    </section>
  );
};

export default Caroussel;


