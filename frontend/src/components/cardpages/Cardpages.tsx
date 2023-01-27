import { ICardproducts } from "../../types/typeDatas";
import Images from "../imageComponent/Images";
import { BsHeartFill } from "react-icons/bs"

const Cardpages = ({ product }: ICardproducts) => {
  return (
    <section className="page-pagination-product">
      <section className="page-like">
        <BsHeartFill size="2.2rem" className="page-like-icon" />
      </section>
      <section className="page-pagination-image">
        <Images src={product?.image[0]} alt={product?.tailorname} />
      </section>
      <section className="page-pagination-text">
        <h6 className="pagination-text-H6">{product?.tailorname}</h6>
        <p className="pagination-text-price">&euro;{product?.price}</p>
        <p className="pagination-text-color">{product?.color}</p>
        <section className="pagination-hidden-info">
        <p className="pagination-text-size">
          <span className="pagination-text-span">Avalable sizes</span>: M, L, XL
        </p>
        <button className="pagination-product-btn">Add to cart</button>
        </section>
        
      </section>
    </section>
  );
};

export default Cardpages;
