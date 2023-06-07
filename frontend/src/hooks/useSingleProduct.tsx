import { useState } from "react";
import useCart from "./useCart";
import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "./useFetchProduct";

const useSingleProduct = () => {
  const [isOn, setIsOn] = useState(false);
  const [chosenSize, setChoseSize] = useState("");
  const { dispatch, REDUCER_ACTIONS } = useCart();

  const { _id } = useParams();
  const typedId = _id as string;
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(typedId);
  const product = data?.data.product;

  const handleSelectVisibility = () => {
    setIsOn(!isOn);
  };

  const handleAddToCart = () => {
    if (chosenSize === "" || !product) return;
    const onAddToCart = () =>
      dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
    onAddToCart();
  };

  return {
    isOn,
    setIsOn,
    data,
    chosenSize,
    setChoseSize,
    status,
    isLoading,
    isError,
    error,
    product,
    handleSelectVisibility,
    handleAddToCart,
  };
};

export default useSingleProduct;