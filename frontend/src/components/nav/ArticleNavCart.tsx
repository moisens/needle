import { IProducts } from "../../context/CartContext";
import useSingleProduct from "../../hooks/useSingleProduct";
import Images from "../imageComponent/Images";

const ArticleNavCart = ({ tailorname, qty, image, price }: IProducts) => {
  const { chosenSize } = useSingleProduct();

  return (
    <article className="cart-article-content">
      <div className="cart-image-content">
        <Images src={image[0]} alt={tailorname} title={tailorname} />
      </div>
      <div className="cart-infos-container">
        <div>
          <p className="cart-p">{tailorname}</p>
          <p className="cart-p">Size: {chosenSize}</p>
          <p className="cart-p">Quantity: {qty}</p>
        </div>
        <div className="cart-price">
          <p className="cart-p">{`${price * qty}`} €</p>
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
