import { createContext, useState } from "react";
import { ResponseIProducts } from "../types/typeDatas";

interface IGetdataprops {
  children: React.ReactNode;
}

interface IGetdata {
  data: ResponseIProducts[];
}


export const GetclothesContext = createContext<IGetdata | null>(null);

export const GetclothesProvider = ({ children }: IGetdataprops) => {

  return <GetclothesContext.Provider value={{}}>
    {children}
  </GetclothesContext.Provider>
}

