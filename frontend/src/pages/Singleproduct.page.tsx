import "./pages.scss";
import "../components/singleProduct/singleproduct.scss";
//import { useFetchSingleProduct } from "../hooks/useFetchProduct";
//import { useParams } from "react-router-dom";
//import { useState } from "react";
//import useCart from "../hooks/useCart";
import { BsArrowLeft } from "react-icons/bs";
import SinglepageComponent from "../components/singleProduct/SinglepageComponent";
import useSingleProduct from "../hooks/useSingleProduct";
import { ResponseIProducts } from "../types/typeDatas";

const SingleproductPage = () => {
  const {
    isOn,
    setIsOn,
    data,
    chosenSize,
    setChoseSize,
    status,
    isLoading,
    isError,
    error,
    handleSelectVisibility,
    handleAddToCart,
  } = useSingleProduct();

  const defaulClassName = "single";

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <main className="pages-container">
      <>
        <section className="singlepage-container">
          <header className="singlepage-header">
            <div className="single-back">
              <BsArrowLeft size="1.8rem" /> <p>Back to clothes</p>
            </div>
            {status === "success" ? (
              <SinglepageComponent
                data={data as ResponseIProducts}
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
          </header>
        </section>
      </>
    </main>
  );
};

export default SingleproductPage;
