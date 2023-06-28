import { useState } from "react";
import useCart from "../../hooks/useCart";
import useLike from "../../hooks/useLike";
import { ICardproducts } from "../../types/typeDatas";
import Button from "../button/Button";
import Images from "../imageComponent/Images";
import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cardpages = ({ product }: ICardproducts) => {
  const { dispatch, REDUCER_ACTIONS } = useCart();
  const { REDUCER_ACTIONS: LIKES_REDUCERS, dispatch: dispatchlike } = useLike();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  //TODO: later, need to use `onAddToCart` from useSingleProduct - Only add to cart if there is a size!!!
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const onAddToFavorites = () =>
    dispatchlike({ type: LIKES_REDUCERS.ADD, payload: { ...product, qty: 1 } });
  const onRemoveFromWishList = () =>
    dispatchlike({ type: LIKES_REDUCERS.REMOVE, payload: product });

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
  };


  return (
    <section className="page-pagination-product">
      <section className="page-like">
        {!isLiked ? (
          <BsHeart
            size="1.8rem"
            className="page-like-icon"
            onClick={() => {
              handleIsLiked();
              onAddToFavorites();
            }}
          />
        ) : (
          <BsHeartFill
            size="1.8rem"
            className="page-like-icon"
            onClick={() => {
              handleIsLiked();
              onRemoveFromWishList();
            }}
          />
        )}
      </section>
      <Link to={`/single-product/${product?._id}`}>
        <section className="page-pagination-image">
          <Images src={product?.image[0]} alt={product?.tailorname} />
        </section>
      </Link>
      <section className="page-pagination-text">
        <Link to={`/single-product/${product?._id}`}>
          <h6 className="pagination-text-H6">{product?.tailorname}</h6>
          <p className="pagination-text-price">&euro; {product?.price}</p>
          <p className="pagination-text-color">{product?.color}</p>
          <p className="pagination-text-size">
            <span className="pagination-text-span">Available sizes</span>: M, L,
            XL
          </p>
        </Link>
        <section className="pagination-hidden-info">
          <Button
            as="button"
            className="pagination-product-btn"
            handleClick={onAddToCart}
          >
            Add to cart
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Cardpages;
