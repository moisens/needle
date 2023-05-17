import { createContext, useState, useEffect } from "react";

export type InitStateType = "Gender" | "Men" | "Women";

const initialState: InitStateType = "Gender";
interface MainContextProp {
  selectedCategory: typeof initialState;
  setSelectedCategory: React.Dispatch<React.SetStateAction<"Men" | "Women">>;
}

const initialStateContext: MainContextProp = {
  selectedCategory: "Gender",
  setSelectedCategory: () => {},
};

interface ChildrenProps {
  children: React.ReactNode;
}

const MaincategoryContext = createContext<MainContextProp>(initialStateContext);

export const MaincategoryProvider = ({
  children,
}: ChildrenProps) => {
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
