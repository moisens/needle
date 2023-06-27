import { useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState({
    likeItem: false,
    cartItem: false,
    clothes: false,
    shoes: false,
  });

  const handleOnHover = (itemToHover: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [itemToHover]: true,
    }));
  };

  const handleOnMouseOut = (itemToHover: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [itemToHover]: false,
    }));
  };

  return {
    isHovered,
    handleOnHover,
    handleOnMouseOut,
  };
};

export default useHover;
