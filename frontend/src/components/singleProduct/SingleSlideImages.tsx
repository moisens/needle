import { IProducts } from "../../types/typeDatas";
import Images from "../imageComponent/Images";

export type SingleProps = {
  data: {
    product: IProducts;
  };
};

const SingleSlideImages = ({ data }: SingleProps) => {
  const { product } = data;
  return (
    <>
      {product.image.map((img) => (
        <div key={img}>
          <Images src={img} alt={product.tailorname} />
        </div>
      ))}
    </>
  );
};

export default SingleSlideImages;
