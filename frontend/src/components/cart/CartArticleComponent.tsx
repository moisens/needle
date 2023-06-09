import Images from "../imageComponent/Images";
import { IProducts } from "../../context/CartContext";
import useCart from "../../hooks/useCart";

export type ItemsProps = {
  item: IProducts
}

const CartArticleComponent = ({ item }: ItemsProps) => {
  const { tailorname, color, size, image, price } = item;
  const { REDUCER_ACTIONS, dispatch } = useCart();

  const onRemoveItem = () => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })

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
          <form className="article-form-content">
            <label htmlFor="number" />{/* //TODO: Create a Form component!! */}
            <input type="number" name="number" placeholder="choose" />
          </form>
        </div>
        <div className="article-infos-price">
          <div className="article-delete-moveto">
            <p onClick={onRemoveItem}>delete</p>
            <p>Move to Price</p>
          </div>
          <p className="article-total-price">{price} €</p>
        </div>
      </div>
    </article>
  );
};

export default CartArticleComponent;
