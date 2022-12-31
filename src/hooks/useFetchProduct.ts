import { useQuery } from "react-query";
import axios from "axios";
import { ResponseIProducts } from "../types/typeDatas";

const fetchProduct = async (): Promise<ResponseIProducts> => {
  return await axios.get("/api/v1/products");
};

const fetchClothes = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="all"`);
}

const fetchJackets = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="jacket"`)
} 
const fetchShirts = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="shirt"`)
} 
const fetchPants = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="pants"`)
} 
const fetchSuits = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="suit"`)
} 


export const useFetchClothes = () => {
  return useQuery<ResponseIProducts, Error>(["clothes"], fetchClothes)
}

export const useFetchJackets = () => {
  return useQuery<ResponseIProducts, Error>(["jacket"], fetchJackets);
}

const useFetchproducts = () => {
  return useQuery<ResponseIProducts, Error>(["products"], fetchProduct);
};

export default useFetchproducts;
