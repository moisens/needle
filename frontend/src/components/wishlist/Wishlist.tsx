import Images from "../../components/imageComponent/Images";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IProducts } from "../../types/typeDatas";
import { Link } from "react-router-dom";
import useLike from "../../hooks/useLike";
import useCart from "../../hooks/useCart";

export type WishSingleProdType = {
  wish: IProducts;
};

const WishList = ({ wish }: WishSingleProdType) => {
  const { _id, image, tailorname, color, price, size } = wish;
  const { REDUCER_ACTIONS: LIKE_REDUCERS, dispatch: likedispatch } = useLike();
  const { REDUCER_ACTIONS, dispatch } = useCart();


  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...wish, qty: 1 } });
  const onRemoveFromWishList = () => likedispatch({ type: LIKE_REDUCERS.REMOVE, payload: wish })

  const handleAddCartAndRemoveWishlist = () => {
    onAddToCart();
    onRemoveFromWishList()
  }



  return (
    <>
      <article className="whislist-article-container">
        <div className="wishlist-image-container">
          <Link to={`/single-product/${_id}`}>
            <Images src={image[0]} alt={tailorname} title={tailorname} />
          </Link>
          <div className="wishlist-icons">
            <div onClick={handleAddCartAndRemoveWishlist}>
              <MdOutlineShoppingBag size="1.6rem" />
            </div>
            <div onClick={onRemoveFromWishList}>
              <FiTrash2 size="1.6rem" />
            </div>
          </div>
        </div>

        <div className="wishlist-text-container">
          <Link to={`/single-product/${_id}`}>
            <h3>{tailorname}</h3>
            <p>{color}</p>
            <p>{price} €</p>
            <p>
              available size:{" "}
              {/*//TODO: on the back-end add an id, then use it here! */}
              {size.map((siz) => (
                <span key={siz}>{siz}</span>
              ))}
            </p>
          </Link>
        </div>
      </article>
    </>
  );
};

export default WishList;
