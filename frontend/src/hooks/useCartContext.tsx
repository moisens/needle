import { useReducer, useMemo } from "react";
import {
  ICartState,
  REDUCER_ACTION_TYPE,
  reducer,
} from "../context/CartContext";

const useCartContext = (intialCartState: ICartState) => {
  const [state, dispatch] = useReducer(reducer, intialCartState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  //Total Items Functionality
  const totalItems = state.cart.reduce((previousValue, cartItmem) => {
    return previousValue + cartItmem.qty;
  }, 0);

  //Total Price Functionality
  const totalPrice = new Intl.NumberFormat("fr-BE", {
    style: "currency",
    currency: "EUR",
  }).format(
    state.cart.reduce((previousValue, cartItmem) => {
      return previousValue + cartItmem.qty * cartItmem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a._id);
    const itemB = Number(b._id);
    return itemA - itemB;
  });

  return {
    REDUCER_ACTIONS,
    totalItems,
    totalPrice,
    cart,
    dispatch,
  };
};

export default useCartContext;
