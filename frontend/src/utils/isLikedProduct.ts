import { IProducts } from "../types/typeDatas";

const isLikedProduct = (like: IProducts[], product: IProducts) => {
  return !like.some((likedProduct) => likedProduct._id === product._id);
};

export default isLikedProduct;
