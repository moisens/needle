import Images from "../../components/imageComponent/Images";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IProducts } from "../../types/typeDatas";
import { Link } from "react-router-dom";

export type WishSingleProdType = {
  wish: IProducts;
};

const WishList = ({ wish }: WishSingleProdType) => {
  const { _id, image, tailorname, color, price, size } = wish;

  return (
    <>
      <article className="whislist-article-container">
        <div className="wishlist-image-container">
          <Link to={`/single-product/${_id}`}>
            <Images src={image[0]} alt={tailorname} title={tailorname} />
          </Link>
          <div className="wishlist-icons">
            <div>
              <MdOutlineShoppingBag size="1.6rem" />
            </div>
            <div>
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
              {/*//TODO: on the back add an id, the use it here! */}
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
