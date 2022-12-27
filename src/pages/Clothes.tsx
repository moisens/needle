import useFetchproducts from "../hooks/useFetchProduct";
import Cardpages from "../components/cardpages/Cardpages";

const Clothes = () => {
  const { data, status, isLoading, isError, error } = useFetchproducts();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <>
      {status === "success" &&
        data?.data.products?.map((product) => (
          <Cardpages product={product} key={product?._id} />
        ))}
    </>
  );
};

export default Clothes;
