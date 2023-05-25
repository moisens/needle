import Images from "../imageComponent/Images";
import { IProducts } from "../../context/CartContext";



const CartArticleComponent = ({ tailorname, color, size, image, price }: IProducts) => {
  return (
    <article className="articles-content">
      <div className="article-image-container">
        <Images src={image[0]} alt={tailorname} title={tailorname} />
      </div>
      <div className="article-infos-container">
        <div className="article-articles">
          <div className="article-infos-content">
            <h3>{tailorname}</h3>
            <p>color: {color}</p>
            <p>size: {size[0]}</p>{/* //TODO: Create a size component with all the functionality! */}
          </div>
          <div className="article-form-content">
            <label htmlFor="item-number" />{/* //TODO: Create a Form component!! */}
            <input type="number" />
          </div>
        </div>
        <div className="article-infos-price">
          <div className="article-delete-moveto">
            <p>delete</p>
            <p>Move to Price</p>
          </div>
          <p className="article-total-price">{price} €</p>
        </div>
      </div>
    </article>
  );
};

export default CartArticleComponent;
