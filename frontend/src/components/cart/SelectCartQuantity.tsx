import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";




const SelectCartQuantity = () => {
  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    setIsActive(!isActive);
  };
  return (
    <section className="article-section-container">
      <div className="select-select-content" onClick={handleIsActive}>
        <p>1</p> <RiArrowDownSFill size="1.8rem" />
      </div>
      <div
        className={
          isActive
            ? "article-quantity-container isActive"
            : "article-quantity-container"
        }
      >
        <article className="article-quantity">1</article>
        <article className="article-quantity">2</article>
        <article className="article-quantity">3</article>
      </div>
    </section>
  );
};

export default SelectCartQuantity;
