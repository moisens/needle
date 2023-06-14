import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MaincategoryProvider } from "./context/MaincategoryContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ProductCartProvider } from "./context/CartContext";
import { LikeContextProvider } from "./context/LikeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MaincategoryProvider>
        <ProductCartProvider>
          <LikeContextProvider>
            <App />
          </LikeContextProvider>
        </ProductCartProvider>
      </MaincategoryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
