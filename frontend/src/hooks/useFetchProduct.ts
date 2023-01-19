import { useQuery } from "react-query";
import axios from "axios";
import { ResponseIProducts } from "../types/typeDatas";



const fetchClothesWomen = async (mainFilter: string, categoryFilter: string, subCategoryFilter: string): Promise<ResponseIProducts> => {
  return await axios(`/api/v1/products?maincategories=${mainFilter}&categories=${categoryFilter}&subcategories=${subCategoryFilter}`)
}

export const useFetchClothesWomen = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "all"
  return useQuery<ResponseIProducts, Error>(["women-clothes"], () => fetchClothesWomen(mainCategories, categories, subCategories))
}

const fetchWomenJackets = async (mainFilter: string, categoryFilter: string, subCategoryFilter: string): Promise<ResponseIProducts> => {
  return await axios.get(`/api/v1/products?maincategories=${mainFilter}&categories=${categoryFilter}&subcategories=${subCategoryFilter}`)
}

export const useFetchWomenJackets = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "jackets"
  return useQuery<ResponseIProducts, Error>(["women-jackets"], () => fetchWomenJackets(mainCategories, categories, subCategories))
}



const fetchShirts = async (): Promise<ResponseIProducts> => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=shirt`
  );
};

const fetchPants = async (): Promise<ResponseIProducts> => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=pants`
  );
};

const fetchSuits = async (): Promise<ResponseIProducts> => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=suits`
  );
};

const fetchDress = async () => {
  return await axios.get(
    `/api/v1/products?maincategories=women&categories=clothes&subcategories=dress`
  );
};



export const useFetchShirts = () => {
  return useQuery<ResponseIProducts, Error>(["shirt"], fetchShirts);
};

export const useFetchPants = () => {
  return useQuery<ResponseIProducts, Error>(["pants"], fetchPants);
};

export const useFetchSuits = () => {
  return useQuery<ResponseIProducts, Error>(["suits"], fetchSuits);
};

export const useFetchDress = () => {
  return useQuery<ResponseIProducts, Error>(["dress"], fetchDress);
};
