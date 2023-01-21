import { useFetchClothesWomen } from "../../hooks/useFetchProduct";
import usePages from "../../hooks/usePages";


const ButtonsPage = () => {
  const { page, setPage } = usePages();
  const { data, status, isLoading, isError, error } =
    useFetchClothesWomen(page);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <section className="page-pagination-btns">
        <button
          className="pagination-btn-btn prev-btn"
          onClick={() => setPage((oldPage) => oldPage - 1)}
        >
          PREVIOUS
        </button>
        <section className="page-btn-container">
          {status === "success" && Array.from(Array(data?.data.numOfPages).keys()).map((btn) => {
            const newPageNumber = btn + 1;
            return (
              <button
                className="page-bnts-btns"
                key={newPageNumber}
                onClick={() => setPage(newPageNumber)}
              >
                {newPageNumber}
              </button>
            );
          })}
        </section>
        <button
          className="pagination-btn-btn next-btn"
          onClick={() => setPage((oldPage) => oldPage + 1)}
        >
          NEXT
        </button>
      </section>
  )
}

export default ButtonsPage