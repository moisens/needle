import { useQuery } from "react-query";
import axios from "axios";
import { ResponseIProducts } from "../types/typeDatas";

const fetchClothes = async (): Promise<ResponseIProducts> => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=all`
  );
};

const fetchJackets = async (): Promise<ResponseIProducts> => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=jackets`
  );
};

const fetchShirts = async (): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories=women&categories=clothes&subcategories=shirt`)
}

//const fetchPants = async (): Promise<ResponseIProducts> => {
//  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="pants"`)
//}
//const fetchSuits = async (): Promise<ResponseIProducts> => {
//  return await axios.get(`/api/v1/products?maincategories="women"&subcategories="suit"`)
//}

export const useFetchClothes = () => {
  return useQuery<ResponseIProducts, Error>(["clothes"], fetchClothes);
};

export const useFetchJackets = () => {
  return useQuery<ResponseIProducts, Error>(["jackets"], fetchJackets);
};

export const useFetchShirts = () => {
  return useQuery<ResponseIProducts, Error>(["shirt"], fetchShirts)
}
