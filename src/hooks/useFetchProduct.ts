import { useQuery } from "react-query";
import axios from "axios";
import { IProducts, ProductsDataType } from "../types/typeDatas";

const fetchProduct = async (): Promise<ProductsDataType[]> => {
  return await axios.get("/api/v1/products").then((response => response.data));
};

const useFetchproducts = () => {
  return useQuery<ProductsDataType[], Error>(["products"], fetchProduct);
};

export default useFetchproducts;
