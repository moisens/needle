import "./pages.scss";
import "../components/singleProduct/singleproduct.scss";
import { useFetchSingleProduct } from "../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";
import DetailComponent from "../components/singleProduct/DetailComponent";
import { BsArrowLeft } from "react-icons/bs";
import SinglepageComponent from "../components/singleProduct/SinglepageComponent";

const SingleproductPage = () => {
  const [isOn, setIsOn] = useState(false);
  const [chosenSize, setChoseSize] = useState("");
  const { dispatch, REDUCER_ACTIONS } = useCart();

  const { _id } = useParams();
  const typedId = _id as string;
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(typedId);
  const product = data?.data.product;
  const defaulClassName = "single";

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error.message}</p>;

  const handleSelectVisibility = () => {
    setIsOn(!isOn);
  };

  const handleAddToCart = () => {
    if (chosenSize === "" || !product) return;
    const onAddToCart = () =>
      dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
    onAddToCart();
  };

  return (
    <main className="pages-container">
      <>
        <section className="singlepage-container">
          <header className="singlepage-header">
            <DetailComponent>
              <div className="single-back">
                <BsArrowLeft size="1.8rem" /> <p>Back to clothes</p>
              </div>
              {/*//TODO: Add an other reusable component for detail in cardspage*/}
              {status === "success" ? (
                <SinglepageComponent
                  data={data}
                  handleSelectVisibility={handleSelectVisibility}
                  handleAddToCart={handleAddToCart}
                  isOn={isOn}
                  setIsOn={setIsOn}
                  chosenSize={chosenSize}
                  setChoseSize={setChoseSize}
                  customClass={defaulClassName}
                />
              ) : (
                <>Fallback component with a message!</>
              )}
            </DetailComponent>
          </header>
        </section>
      </>
    </main>
  );
};

export default SingleproductPage;
