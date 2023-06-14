import { createContext, ReactNode } from "react";

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
    const qty = itemsExist ? itemsExist.qty + 1 : 1;

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
  throw new Error("Unidentified reducer action type!");
};

const Likecontext = createContext({});

export const LikeContextProvider = ({ children }: ChildrenLikeProps) => {
  return <Likecontext.Provider value={{}}>{children}</Likecontext.Provider>;
};
