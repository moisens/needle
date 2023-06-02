import "./singleproduct.scss";
import Images from "../imageComponent/Images";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useFetchSingleProduct } from "../../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import DetailComponent from "./DetailComponent";
import Button from "../button/Button";
import SingleSlideImages from "./SingleSlideImages";
import SelectSize from "./SelectSizeComponent";
//import { ICardproducts } from "../../types/typeDatas";
import { useState } from "react";
//import useCart from "../../hooks/useCart"

const Singleproduct = () => {//{ product }: ICardproducts
  const { _id } = useParams();
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(_id);

  const [isOn, setIsOn] = useState(false);
  const [chosenSize, setChoseSize] = useState("");
  //const { dispatch, REDUCER_ACTIONS } = useCart();

  

  const handleSelectVisibility = () => {
    setIsOn(!isOn);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="singlepage-container">
      <header className="singlepage-header">
        <DetailComponent>
          <div className="single-back">
            <BsArrowLeft size="1.8rem" /> <p>Back to clothes</p>
          </div>

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
                      <p>{chosenSize === "" ? "Select your size" : chosenSize}</p>
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
                    <Button as="button" className="single-add-btn">
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
  );
};

export default Singleproduct;
