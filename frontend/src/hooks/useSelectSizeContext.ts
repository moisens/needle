import { useContext } from "react";
import SelectSizeContext from "../context/SelectsizeContext";

const useSelectsize = () => {
  const context = useContext(SelectSizeContext);
  if (!context)
    throw new Error("useSelectsize must be used within a SelectSizeProvider");
  return context;
};

export default useSelectsize;
