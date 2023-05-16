import ProductCartcontext from "../context/CartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(ProductCartcontext);
  if (!context)
    throw new Error("useCart must be used within a ProductCartProvider");
  return context;
};

export default useCart;
