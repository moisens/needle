import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MaincategoryProvider } from "./context/MaincategoryContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MaincategoryProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MaincategoryProvider>
  </React.StrictMode>
);
