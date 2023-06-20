import Images from "../../components/imageComponent/Images";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IProducts } from "../../types/typeDatas";




const WishList = ({ image, tailorname, color, price, size }: IProducts) => {
  return (
    <>
      <article className="whislist-article-container">
        <div className="wishlist-image-container">
          <Images src={image[0]} alt={tailorname} title={tailorname} />
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
          <h3>{tailorname}</h3>
          <p>{color}</p>
          <p>{price} €</p>
          <p>available size: {size.map(siz => <span key={siz}>{siz}</span>)}</p>
        </div>
      </article>
    </>
  );
};

export default WishList;
