import { ICardproducts } from "../../types/typeDatas";
import Images from "../imageComponent/Images";
//import { BsHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cardpages = ({ product }: ICardproducts) => {
  return (
    <section className="page-pagination-product">
      <section className="page-like">
        <CiHeart size="2.2rem" className="page-like-icon" />
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
          <button className="pagination-product-btn">Add to cart</button>
        </section>
      </section>
    </section>
  );
};

export default Cardpages;
