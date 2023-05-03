import { createContext, useState, ReactNode } from "react";


export type InitStateType = "Gender" | "Men" | "Women"

let initialState: InitStateType;
interface MainContextProp  {
  selectedCategory: typeof initialState,
  setSelectedCategory: React.Dispatch<React.SetStateAction<"Gender" | "Men" | "Women">>
  
}

const initialStateContext: MainContextProp = {
  selectedCategory: "Gender",
  setSelectedCategory: () => {}
}

interface ChildrenProps {
  children: React.ReactNode;
}


const MaincategoryContext = createContext<MainContextProp>(initialStateContext);

export const MaincategoryProvider = ({ children }:ChildrenProps): ReactNode => {
  const [selectedCategory, setSelectedCategory] = useState(initialState);


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
