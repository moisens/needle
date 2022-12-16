import { Sliderdata } from "../../types/typeSlides"
import { useState, useEffect } from "react";
import useSlidebtns from "../../hooks/useSlidebtns";


const Caroussel = ({ sliders }: Sliderdata) => {
  const { index } = useSlidebtns({sliders});
  //const [index, setIndex] = useState(0);



  //useEffect(() => {
  //  const lastIndex = sliders.length - 1;
  //  if (index < 0) {
  //    setIndex(lastIndex)
  //  }
  //  if (index > lastIndex) {
  //    setIndex(0);
  //  }
  //}, [index, sliders])



  return (
    <section className="slider-slider-content">
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
          <section className={`slide-images ${position}`} key={id}>
            <img src={image} alt="image" />
          </section>
        )
      })}
      
    </section>
  );
};

export default Caroussel;
