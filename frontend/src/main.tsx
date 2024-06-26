import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MaincategoryProvider } from "./context/MaincategoryContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ProductCartProvider } from "./context/CartContext";
import { LikeContextProvider } from "./context/LikeContext";
import { SelectSizeProvider } from "./context/SelectsizeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MaincategoryProvider>
        <SelectSizeProvider>
        <ProductCartProvider>
          <LikeContextProvider>
            <App />
          </LikeContextProvider>
        </ProductCartProvider>
        </SelectSizeProvider>
      </MaincategoryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
