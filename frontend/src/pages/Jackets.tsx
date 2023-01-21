import { useFetchWomenJackets } from "../hooks/useFetchProduct";
import usePages from "../hooks/usePages";
import Cardpages from "../components/cardpages/Cardpages";
import Button from "../components/button/Button";

const Jackets = () => {
  const { page, setPage } = usePages();
  const { data, status, isLoading, isError, error, isFetching } = useFetchWomenJackets(page);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      <section className="page-pagination-one-page">
        {status === "success" &&
          data?.data.products?.map((product) => (
            <Cardpages product={product} key={product._id} />
          ))}
      </section>
      <section className="page-pagination-btns">
        <Button
          as="button"
          className={
            page === 1 ? "pagination-btn-btn prev" : "pagination-btn-btn"
          }
          handleClick={() => setPage((oldPage) => oldPage - 1)}
          disabled={page === 0}
        >
          {isFetching ? "Loading..." : "PREVIOUS"}
        </Button>
        <section className="page-btn-container">
          {Array.from(Array(data?.data.numOfPages).keys()).map((btn) => {
            const newPageNumber = btn + 1;
            return (
              <Button
                as="button"
                className={
                  page === newPageNumber
                    ? "page-bnts-btns activePage"
                    : "page-bnts-btns"
                }
                key={newPageNumber}
                handleClick={() => setPage(newPageNumber)}
              >
                {newPageNumber}
              </Button>
            );
          })}
        </section>
        <Button
          as="button"
          className="pagination-btn-btn"
          handleClick={() => setPage((oldPage) => oldPage + 1)}
        >
          {isFetching ? "Loading..." : "NEXT"}
        </Button>
      </section>
    </>
  );
};

export default Jackets;
