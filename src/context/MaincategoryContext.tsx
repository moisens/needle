import { createContext, useState } from "react";


interface MainCategories {
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
  
}

interface MaincategoriesProps {
  children: React.ReactNode;
}


const MaincategoryContext = createContext<MainCategories | null >(null);

export const MaincategoryProvider = ({ children }:MaincategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Gender");


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
