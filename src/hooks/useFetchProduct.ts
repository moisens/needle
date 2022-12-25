import { useQuery } from "react-query";
import axios from "axios";
import { IProducts } from "../types/typeDatas";

const fetchProduct = async (): Promise<IProducts> => {
  return await axios.get("/api/v1/products");
};

const useFetchproducts = () => {
  return useQuery(["products"], fetchProduct);
};

export default useFetchproducts;
