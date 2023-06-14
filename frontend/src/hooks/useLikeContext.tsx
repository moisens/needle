import { useReducer, useMemo } from "react";
import {
  ILikeState,
  REDUCERS_ACTIONS_TYPE,
  reducer,
} from "../context/LikeContext";

const useLikeContext = (initialLikeState: ILikeState) => {
  const [state, dispatch] = useReducer(reducer, initialLikeState);

  const REDUCER_ACTIONS = useMemo(() => REDUCERS_ACTIONS_TYPE, []);

  const like = state.like.sort((a, b) => {
    const itemA = Number(a._id);
    const itemB = Number(b._id);
    return itemA - itemB;
  });

  return {
    dispatch,
    REDUCER_ACTIONS,
    like,
  };
};

export default useLikeContext;
