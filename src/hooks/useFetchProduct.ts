import { useQuery } from "react-query";
import axios from "axios";
import { ResponseIProducts } from "../types/typeDatas";

const fetchProduct = async (): Promise<ResponseIProducts> => {
  return await axios.get("/api/v1/products");
};

const useFetchproducts = () => {
  return useQuery<ResponseIProducts, Error>(["products"], fetchProduct);
};

export default useFetchproducts;
