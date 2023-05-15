import { createContext, ReactNode, useReducer } from "react";

export interface IProducts {
  readonly _id: string;
  tailorname: string;
  color: string;
  price: string;
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
}

export interface ChildrenCardType {
  children: ReactNode;
}

export interface ICartState {
  cart: IProducts[];
}

export interface ReducerAction {
  type: string;
  payload?: IProducts;
}

const intialCartState: ICartState = {
  cart: [],
};

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
};

const reducer = (state: ICartState, action: ReducerAction): ICartState => {
  // Add Item to cart functionality
  if (action.type === REDUCER_ACTION_TYPE.ADD) {
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
    const filteredCart: IProducts[] = state.cart.filter(
      (item) => item._id !== _id
    );
    const itemExists: IProducts | undefined = state.cart.find(
      (item) => item._id === _id
    );
    const qty = itemExists ? itemExists.qty + 1 : 1;
    return {
      ...state,
      cart: [
        ...filteredCart,
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

  //Remove Item from cart functionality
  if (action.type === REDUCER_ACTION_TYPE.REMOVE) {
    if (!action.payload)
      throw new Error("action.payload is missing in REMOVE functionality");
    const { _id } = action.payload;
    const filteredCart: IProducts[] = state.cart.filter(
      (item) => item._id !== _id
    );
    return { ...state, cart: [...filteredCart] };
  }

  throw new Error("Unidentified reducer action type!");
};

const ProductCartcontext = createContext();

export const ProductCartProvider = ({
  children,
}: ChildrenCardType): ReactNode => {
  const [state, dispatch] = useReducer(reducer, intialCartState);

  return (
    <ProductCartcontext.Provider value={{}}>
      {children}
    </ProductCartcontext.Provider>
  );
};
