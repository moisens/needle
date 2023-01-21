import { useFetchClothesWomen } from "../hooks/useFetchProduct";
import usePages from "../hooks/usePages";
import Cardpages from "../components/cardpages/Cardpages";
import Button from "../components/button/Button";

const Clothes = () => {
  const { page, setPage } = usePages();
  const { data, status, isLoading, isError, error } =
    useFetchClothesWomen(page);

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
          className="pagination-btn-btn prev-btn"
          handleClick={() => setPage((oldPage) => oldPage - 1)}
        >
          PREVIOUS
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
          className="pagination-btn-btn next-btn"
          handleClick={() => setPage((oldPage) => oldPage + 1)}
        >
          NEXT
        </Button>
      </section>
    </>
  );
};

export default Clothes;
