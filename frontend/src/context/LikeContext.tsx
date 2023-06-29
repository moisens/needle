import { createContext, ReactNode } from "react";
import useLikeContext from "../hooks/useLikeContext";

export type IProducts = {
  readonly _id: string;
  tailorname: string;
  color: string;
  price: number;
  description: string;
  clothesmaterials: string[];
  image: string[];
  maincategories: string;
  subcategories: string;
  size: string[];
  featured: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  qty: number;
};

export interface ChildrenLikeProps {
  children: ReactNode;
}

export interface ILikeState {
  like: IProducts[];
}

export interface ReducerAction {
  type: string;
  payload?: IProducts;
}

export const REDUCERS_ACTIONS_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  //SET_LIKE: "SET_LIKE",
};

export const initialLikeState: ILikeState = {
  like: [],
};

export type ReducerActionType = typeof REDUCERS_ACTIONS_TYPE;
export type UseLikeContextType = ReturnType<typeof useLikeContext>;

const initialStateContext: UseLikeContextType = {
  like: [],
  totalLikes: 0,
  REDUCER_ACTIONS: REDUCERS_ACTIONS_TYPE,
  dispatch: () => {},
};

export const reducer = (
  state: ILikeState,
  action: ReducerAction
): ILikeState => {
  if (action.type === REDUCERS_ACTIONS_TYPE.ADD) {
    if (!action.payload)
      throw new Error("action.payload is missing in ADD functionality");

    const {
      _id,
      tailorname,
      color,
      price,
      description,
      clothesmaterials,
      image,
      maincategories,
      subcategories,
      size,
      featured,
      inventory,
      averageRating,
      numOfReviews,
    } = action.payload;

    const filtredItems: IProducts[] = state.like.filter(
      (item) => item._id !== _id
    );
    const itemsExist: IProducts | undefined = state.like.find(
      (item) => item._id === _id
    );
    const qty = itemsExist ? 1 : 1; //Here I don't want to increase the like's number. A product can be liked only 1 time!

    return {
      ...state,
      like: [
        ...filtredItems,
        {
          _id,
          tailorname,
          color,
          price,
          description,
          clothesmaterials,
          image,
          maincategories,
          subcategories,
          size,
          featured,
          inventory,
          averageRating,
          numOfReviews,
          qty,
        },
      ],
    };
  }

  if (action.type === REDUCERS_ACTIONS_TYPE.REMOVE) {
    if (!action.payload)
      throw new Error("action.payload is missing in REMOVE functionality");

    const { _id } = action.payload;
    const filtredItems: IProducts[] = state.like.filter(
      (item) => item._id !== _id
    );

    return {
      ...state,
      like: [...filtredItems],
    };
  }

  //if (action.type === REDUCERS_ACTIONS_TYPE.SET_LIKE) {
  //  if (!action.payload)
  //    throw new Error("action.payload is missing in SET_LIKE functionality");
  //  const { _id } = action.payload;
  //  const likeditems: IProducts[] = state.like.filter(
  //    (item) => item._id !== _id
  //  );
  //  return {
  //    ...state,
  //    like: [...likeditems],
  //  };
  //}

  throw new Error("Unidentified reducer action type!");
};

const Likecontext = createContext<UseLikeContextType>(initialStateContext);

export const LikeContextProvider = ({ children }: ChildrenLikeProps) => {
  return (
    <Likecontext.Provider value={useLikeContext(initialLikeState)}>
      {children}
    </Likecontext.Provider>
  );
};

export default Likecontext;
