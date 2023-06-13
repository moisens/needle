import { createContext, ReactNode } from "react";


export type IProducts = {
  readonly _id: string;
  tailorname: string;
  color: string;
  price: number;
  description: string;
  clothesmaterials: string[];
  image: string[];
  maincategories: string;
  subcategories: string;
  size: string[];
  featured: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  qty: number;
};

export type ChildrenLikeType = {
  children: ReactNode
}





const Likecontext = createContext({})


export const LikeContextProvider = ({ children }: ChildrenLikeType) => {

  return <Likecontext.Provider value={{}}>
    { children }
  </Likecontext.Provider>
}





