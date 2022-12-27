export interface IProducts {
  readonly id: string;
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


export type ProductsDataType = {
  products: IProducts | undefined;
}

export interface IProductData {
  productData: ProductsDataType[] | undefined
}


