import { useContext } from "react";
import Likecontext from "../context/LikeContext";

const useLike = () => {
  const context = useContext(Likecontext);
  if (!context)
    throw new Error("useLike must be used within a LikeContextProvider");
  return context;
};

export default useLike;
