import { createContext, useState, useEffect, ReactNode } from "react";

export type InitStateType = "Men" | "Women";

let initialState: InitStateType;
interface MainContextProp {
  selectedCategory: typeof initialState;
  setSelectedCategory: React.Dispatch<React.SetStateAction<"Men" | "Women">>;
}

const initialStateContext: MainContextProp = {
  selectedCategory: "Women",
  setSelectedCategory: () => {},
};

interface ChildrenProps {
  children: React.ReactNode;
}

const MaincategoryContext = createContext<MainContextProp>(initialStateContext);

export const MaincategoryProvider = ({
  children,
}: ChildrenProps): ReactNode => {
  const [selectedCategory, setSelectedCategory] = useState(() =>
    JSON.parse(
      localStorage.getItem("main-category") || JSON.stringify(initialState)
    )
  );

  useEffect(() => {
    localStorage.setItem("main-category", JSON.stringify(selectedCategory));
  }, [selectedCategory]);

  return (
    <MaincategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </MaincategoryContext.Provider>
  );
};

export default MaincategoryContext;
