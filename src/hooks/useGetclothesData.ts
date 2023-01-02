import { useContext } from "react";
import { GetclothesContext } from "../context/GetClothesContext";

const useGetclothesdata = () => {
  const context = useContext(GetclothesContext);
  if (!context)
    throw new Error(
      "useGetclothesdata must be used within a GetclothesProvider!!"
    );
};

export default useGetclothesdata;
