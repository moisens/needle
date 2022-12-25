export interface IProducts {
  id: string;
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
