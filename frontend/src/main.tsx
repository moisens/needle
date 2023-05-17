import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MaincategoryProvider } from "./context/MaincategoryContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ProductCartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MaincategoryProvider>
        <ProductCartProvider>
          <App />
        </ProductCartProvider>
      </MaincategoryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
