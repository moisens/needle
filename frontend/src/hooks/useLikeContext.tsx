import { useReducer, useMemo, useEffect } from "react";
import {
  ILikeState,
  REDUCERS_ACTIONS_TYPE,
  reducer,
} from "../context/LikeContext";

const useLikeContext = (initialLikeState: ILikeState) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialLikeState,
    (initialState) =>
      JSON.parse(
        localStorage.getItem("liked-products") || JSON.stringify(initialState)
      )
  );

  const REDUCER_ACTIONS = useMemo(() => REDUCERS_ACTIONS_TYPE, []);

  const totalLikes = state.like.reduce((prevValue, likeItem) => {
    return prevValue + likeItem.qty;
  }, 0);

  const like = state.like.sort((a, b) => {
    const itemA = Number(a._id);
    const itemB = Number(b._id);
    return itemA - itemB;
  });

  useEffect(() => {
    localStorage.setItem("liked-products", JSON.stringify(state));
  }, [state]);

  return {
    dispatch,
    REDUCER_ACTIONS,
    like,
    totalLikes,
  };
};

export default useLikeContext;
