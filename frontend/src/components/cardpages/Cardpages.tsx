import { ICardproducts } from "../../types/typeDatas";
import Images from "../imageComponent/Images";

const Cardpages = ({ product }: ICardproducts) => {
  return (
    <section className="page-pagination-product">
      <section className="page-pagination-image">
        <Images src={product?.image[0]} alt={product?.tailorname} />
      </section>
      <section className="page-pagination-text">
        <h6 className="pagination-text-H6">{product?.tailorname}</h6>
        <p className="pagination-text-price">&euro;{product?.price}</p>
        <p className="pagination-text-color">{product?.color}</p>
        <p className="pagination-text-size">
          <span className="pagination-text-span">Avalable sizes</span>: M, L, XL
        </p>
        <button className="pagination-product-btn">Add to cart</button>
      </section>
    </section>
  );
};

export default Cardpages;
