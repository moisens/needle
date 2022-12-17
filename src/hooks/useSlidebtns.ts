import { useState, useEffect } from "react";
import { Sliderdata } from "../types/typeSlides";

const useSlidebtns = ({ sliders }: Sliderdata) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliders.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliders]);

  //useEffect(() => {
  //  const slider = setInterval(() => {
  //    setIndex(index + 1)
  //  }, 15000)
  //  return () => clearInterval(slider);
  //}, [index])

  return {
    index,
    setIndex,
  };
};

export default useSlidebtns;
