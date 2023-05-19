import { IProducts } from "../../context/CartContext";
import Images from "../imageComponent/Images";


const ArticleNavCart = ({ tailorname, size, qty, image, price }: IProducts) => {
  return (
    <article className="cart-article-content">
      <div className="cart-image-content">
        <Images src={image[0]} alt="" title="" />
      </div>
      <div className="cart-infos-container">
        <div>
          <p className="cart-p">{tailorname}</p>
          <p className="cart-p">Size: {size[0]}</p>
          <p className="cart-p">Quantity: {qty}</p>
        </div>
        <div className="cart-price">
          <p className="cart-p">€{price}</p>
        </div>
        <div className="cart-functionality">
          <div>
            <p className="cart-p">Move to Favorite</p>
          </div>
          <div>
            <p className="cart-p">Delete</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleNavCart;
