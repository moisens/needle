import { RiArrowDownSFill } from "react-icons/ri";

type Props = {};

const SelectCartQuantity = (props: Props) => {
  return (
    <section className="article-section-container">
      <div className="select-select-content">
        <p>1</p> <RiArrowDownSFill size="1.8rem" />
      </div>
      <div className="article-quantity-container">
        <article className="article-quantity">1</article>
        <article className="article-quantity">2</article>
        <article className="article-quantity">3</article>
      </div>
    </section>
  );
};

export default SelectCartQuantity;
