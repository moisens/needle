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

export interface ResponseIProducts {
  data: {
    products: IProducts[] | undefined;
    numOfPages: number;
  };
}

export interface ICardproducts {
  product: IProducts | undefined;
  queryKey: string
}
