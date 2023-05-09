//import { createContext } from "react";


export interface IProducts {
  readonly _id: string;
  tailorname: string;
  color: string;
  price: string;
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
}





//const ProductCartcontext = createContext();
//
//
//export const ProductCartProvider = ({ children }) => {
//  
//  return <ProductCartcontext.Provider value={{}}>{children}</ProductCartcontext.Provider>
//}

