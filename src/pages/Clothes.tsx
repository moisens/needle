import useFetchproducts from "../hooks/useFetchProduct";
import Cardpages from "../components/cardpages/Cardpages";



const Clothes = () => {
  const { data, status, isLoading, isError, error } = useFetchproducts();
  
  

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <Cardpages products={data} />
  );
};

export default Clothes;


