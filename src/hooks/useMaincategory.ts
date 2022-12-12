import MaincategoryContext from "../context/MaincategoryContext";
import { useContext } from "react";

const useMaincategory = () => {
  const context = useContext(MaincategoryContext);
  if (!context)
    throw new Error(
      "useMaincategory must be used within a MaincategoryProvider!!"
    );
  return context;
};

export default useMaincategory;
