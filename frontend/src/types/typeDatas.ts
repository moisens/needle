export interface IProducts {
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
}

export interface ResponseIProducts {
  data: {
    products: IProducts[] | undefined;
    numOfPages: number | undefined;
    product: IProducts
  };
}

export interface ICardproducts {
  product: IProducts;
}
