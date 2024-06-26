import { IProducts } from "../../context/CartContext";
import useCart from "../../hooks/useCart";
import useLike from "../../hooks/useLike";
import useSelectsize from "../../hooks/useSelectSizeContext";
import Images from "../imageComponent/Images";

export type IsHoveredType = {
  likeItem: boolean;
  cartItem: boolean;
};

const ArticleNavCart = ({
  item,
  isHovered,
}: {
  item: IProducts;
  isHovered: IsHoveredType;
}) => {
  const { tailorname, qty, image, price } = item;
  const { chosenSize } = useSelectsize();
  const { REDUCER_ACTIONS, dispatch } = useCart();
  const { REDUCER_ACTIONS: LIKE_REDUCERS, dispatch: likedispatch } = useLike();

  const onRemoveItem = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });

  const onAddToFavorites = () => {
    likedispatch({ type: LIKE_REDUCERS.ADD, payload: item });
    onRemoveItem();
  };

  const onRemoveFromFavorites = () =>
    likedispatch({ type: LIKE_REDUCERS.REMOVE, payload: item });

  const onAddToCartAndRmoveFromFavorites = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: item });
    onRemoveFromFavorites();
  };

  return (
    <article className="cart-article-content">
      <div className="cart-image-content">
        <Images src={image[0]} alt={tailorname} title={tailorname} />
      </div>
      <div className="cart-infos-container">
        <div>
          <p className="cart-p">{tailorname}</p>
           <p className="cart-p">Size: {chosenSize[chosenSize.length - 1]?.size}</p>{/*//TODO:check if equal _id  */}
          <p className={!isHovered.likeItem ? "cart-p" : "cart-p quantity"}>
            Quantity: {qty}
          </p>
        </div>
        <div className="cart-price">
          <p className="cart-p">{`${price * qty}`} €</p>
        </div>
        <div className="cart-functionality">
          <div>
            <p
              className="cart-p moveto"
              onClick={
                isHovered.likeItem
                  ? onAddToCartAndRmoveFromFavorites
                  : onAddToFavorites
              }
            >
              {isHovered.likeItem ? "Move to Cart" : "Move to Favorite"}
            </p>
          </div>
          <div>
            <p
              className="cart-p delete"
              onClick={
                isHovered.likeItem ? onRemoveFromFavorites : onRemoveItem
              }
            >
              Delete
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleNavCart;
