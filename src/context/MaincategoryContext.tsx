import { createContext, useState } from "react";
import { CategoriesPrime } from "../types/typeLinks";
import { primaryCategories } from "../utils/categories";


interface MainCategories {
  selectedCategory: CategoriesPrime,
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoriesPrime>>
}

interface MaincategoriesProps {
  children: React.ReactNode;
}


const MaincategoryContext = createContext<MainCategories >({} as MainCategories);

export const MaincategoryProvider = ({ children }:MaincategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    primaryCategories[0]
  );
  return (
    <MaincategoryContext.Provider value={{
      selectedCategory,
      setSelectedCategory
    }}>
      { children }
    </MaincategoryContext.Provider>
  )
}

export default MaincategoryContext;
