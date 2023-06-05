import "./pages.scss";
import "../components/singleProduct/singleproduct.scss";
import { useFetchSingleProduct } from "../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";
import DetailComponent from "../components/singleProduct/DetailComponent";
import { BsArrowLeft } from "react-icons/bs";
import SingleSlideImages from "../components/singleProduct/SingleSlideImages";
import Images from "../components/imageComponent/Images";
import { RiArrowDownSFill } from "react-icons/ri";
import SelectSize from "../components/singleProduct/SelectSizeComponent";
import Button from "../components/button/Button";
import { CiHeart } from "react-icons/ci";

const SingleproductPage = () => {
  const [isOn, setIsOn] = useState(false);
  const [chosenSize, setChoseSize] = useState("");
  const { dispatch, REDUCER_ACTIONS } = useCart();

  const { _id } = useParams();
  const typedId = _id as string;
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(typedId);
  const product = data?.data.product;

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
                <section className="single-container">
                  <div className="single-single-content">
                    <section className="single-images-container">
                      <div className="single-slide">
                        <SingleSlideImages {...data} />
                      </div>
                      <div className="single-img">
                        <Images
                          src={data?.data.product.image[0]}
                          alt={data?.data.product.tailorname}
                          title={data?.data.product.tailorname}
                        />
                      </div>
                    </section>
                    <article className="single-article">
                      <h3 className="single-heading-3">
                        {data?.data.product.tailorname}
                      </h3>
                      <div className="single-pricing">
                        <h4 className="single-heading-4">
                          {data?.data.product.price}€
                        </h4>
                        <p>Includes VTA</p>
                      </div>
                      <p className="single-p">
                        <span className="single-color">Color</span>:{" "}
                        {data?.data.product.color}
                      </p>
                      {/*//TODO: create `UniqueColor` component*/}
                      <div className="single-slide-article">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="single-size-container">
                        <div
                          className="single-size-title"
                          onClick={handleSelectVisibility}
                        >
                          <p>
                            {chosenSize === ""
                              ? "Select your size"
                              : chosenSize}
                          </p>
                          <RiArrowDownSFill />
                        </div>
                        <div className="single-size-content">
                          <div
                            className={
                              isOn
                                ? "single-content-content isVisible"
                                : "single-content-content"
                            }
                          >
                            {/*//TODO:after I modified the backend, make sure to use the _id for the key!!!*/}
                            {data?.data.product.size?.map((onesize) => (
                              <SelectSize
                                onesize={onesize}
                                chosenSize={chosenSize}
                                setChoseSize={setChoseSize}
                                setIsOn={setIsOn}
                                key={onesize}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="single-add-like-btns">
                        {/*if there is no size don't add to cart eh!!!!*/}
                        <Button
                          as="button"
                          className="single-add-btn"
                          handleClick={handleAddToCart}
                        >
                          Add to Cart
                        </Button>
                        <CiHeart size="2.5rem" />
                      </div>
                    </article>
                  </div>
                </section>
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
