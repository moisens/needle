import { createContext, ReactNode } from "react";
import useCartContext from "../hooks/useCartContext";

export interface IProducts {
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

export const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initialStateContext: UseCartContextType = {
  cart: [],
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  dispatch: () => {},
  totalItems: 0,
  totalPrice: "",
};


export const reducer = (
  state: ICartState,
  action: ReducerAction
): ICartState => {
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
          //TODO - Try using action.payload instead of passing all the element in the {}
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

  if (action.type === REDUCER_ACTION_TYPE.QUANTITY) {
    if (!action.payload)
      throw new Error("action.payload is missing in QUANTITY functionality");

    const { _id, qty } = action.payload;
    const itemExists: IProducts | undefined = state.cart.find(
      (item) => item._id === _id
    );

    if (!itemExists) throw new Error("To update quantity, item must exist!");
    const updateItem: IProducts = { ...itemExists, qty };
    const filterdeCart: IProducts[] = state.cart.filter(
      (item) => item._id !== _id
    );

    return { ...state, cart: [...filterdeCart, updateItem] };
  }

  throw new Error("Unidentified reducer action type!");
};

const ProductCartcontext =
  createContext<UseCartContextType>(initialStateContext);

export const ProductCartProvider = ({ children }: ChildrenCardType) => {
  return (
    <ProductCartcontext.Provider value={useCartContext(intialCartState)}>
      {children}
    </ProductCartcontext.Provider>
  );
};

export default ProductCartcontext;
