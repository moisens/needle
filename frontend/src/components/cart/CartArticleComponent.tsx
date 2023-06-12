import Images from "../imageComponent/Images";
import { IProducts } from "../../context/CartContext";
import useCart from "../../hooks/useCart";
import SelectCartQuantity from "./SelectCartQuantity";
import useSingleProduct from "../../hooks/useSingleProduct";

export type ItemsProps = {
  item: IProducts;
};

const CartArticleComponent = ({ item }: ItemsProps) => {
  const { tailorname, color, image, price } = item;
  const { REDUCER_ACTIONS, dispatch } = useCart();
  const { chosenSize } = useSingleProduct();

  const onRemoveItem = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });

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
            <p>size: {chosenSize}</p>
          </div>
          <SelectCartQuantity item={item} />
        </div>
        <div className="article-infos-price">
          <div className="article-delete-moveto">
            <p onClick={onRemoveItem}>delete</p>
            <p>Move to Like</p>
          </div>
          <p className="article-total-price">{price * item.qty} €</p>
        </div>
      </div>
    </article>
  );
};

export default CartArticleComponent;
