import { useState } from "react";

const usePages = () => {
  const [page, setPage] = useState(1);
  return {
    page,
    setPage,
  };
};

export default usePages;
