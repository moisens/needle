import useFetchproducts from "../hooks/useFetchProduct";
import Cardpages from "../components/cardpages/Cardpages";



const Clothes = () => {
  const { data, status, isLoading, isError, error } = useFetchproducts();
  console.log(data?.data);
  

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <Cardpages data={data} />
  );
};

export default Clothes;


