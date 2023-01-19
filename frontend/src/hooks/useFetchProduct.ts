import { useQuery } from "react-query";
import axios from "axios";
import { ResponseIProducts } from "../types/typeDatas";


/**
 * Fetch women clothes all subcategories functionality
 * + custom hook that return the fetched clothes func and
 * return a UseQueryResult<ResponseIProducts, Error> Promise
*/
const fetchClothesWomen = async (mainFilter: string, categoryFilter: string, subCategoryFilter: string): Promise<ResponseIProducts> => {
  return await axios(`/api/v1/products?maincategories=${mainFilter}&categories=${categoryFilter}&subcategories=${subCategoryFilter}`)
}

export const useFetchClothesWomen = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "all"
  return useQuery<ResponseIProducts, Error>(["women-clothes", mainCategories, categories, subCategories], () => fetchClothesWomen(mainCategories, categories, subCategories))
}

/**
 * Custom hook that return the fetched jackets func.
 * Return a UseQueryResult<ResponseIProducts, Error> Promise
*/
export const useFetchWomenJackets = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "jackets"
  return useQuery<ResponseIProducts, Error>(["women-jackets", mainCategories, categories, subCategories], () => fetchClothesWomen(mainCategories, categories, subCategories))
}

/**
 * Custom hook that return the fetched shirts func.
 * Return a UseQueryResult<ResponseIProducts, Error> Promise
*/
export const useFetchWomenShirts = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "shirt"
  return useQuery<ResponseIProducts, Error>(["women-shirts", mainCategories, categories, subCategories], () => fetchClothesWomen(mainCategories, categories, subCategories))
}

/**
 * Custom hook that return the fetched pants func.
 * Return a UseQueryResult<ResponseIProducts, Error> Promise
*/
export const useFetchWomenPants = () => {
  const mainCategories = "women";
  const categories = "clothes";
  const subCategories = "pants";
  return useQuery<ResponseIProducts, Error>(["women-pants", mainCategories, categories, subCategories], () => fetchClothesWomen(mainCategories, categories, subCategories))
}



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

export const useFetchSuits = () => {
  return useQuery<ResponseIProducts, Error>(["suits"], fetchSuits);
};

export const useFetchDress = () => {
  return useQuery<ResponseIProducts, Error>(["dress"], fetchDress);
};
