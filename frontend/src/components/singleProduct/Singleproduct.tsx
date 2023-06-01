import "./singleproduct.scss";
import Images from "../imageComponent/Images";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useFetchSingleProduct } from "../../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import DetailComponent from "./DetailComponent";
import { CgRadioCheck } from "react-icons/cg";
import Button from "../button/Button";

const Singleproduct = () => {
  const { _id } = useParams();
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(_id);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="singlepage-container">
      <header className="singlepage-header">
        <DetailComponent>
          <div className="single-back">
            <BsArrowLeft size="1.8rem" /> <p>Back to clothes</p>
          </div>

          <section className="single-container">
            <div className="single-single-content">
              <section className="single-images-container">
                <div className="single-slide">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="single-img">
                  <Images src="" alt="" title="" />
                </div>
              </section>
              <article className="single-article">
                <h3 className="single-heading-3">Tailor name</h3>
                <div className="single-pricing">
                  <h4 className="single-heading-4">1600€</h4>
                  <p>Includes VTA</p>
                </div>
                <p className="single-p">
                  <span className="single-color">Color</span>: red
                </p>
                <div className="single-slide-article">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="single-size-container">
                  <div className="single-size-title">
                    <p>Select your size</p>
                    <RiArrowDownSFill />
                  </div>
                  <div className="single-size-content">
                    <div className="single-size-size">
                      <div className="single-size">
                        <CgRadioCheck size="1.8rem" />
                        <p>L</p>
                      </div>
                      <p>Available</p>
                    </div>
                    <div className="single-size-size">
                      <div className="single-size">
                        <CgRadioCheck size="1.8rem" />
                        <p>M</p>
                      </div>
                      <p>Available</p>
                    </div>
                  </div>
                </div>
                <div className="single-add-like-btns">
                  <Button as="button" className="single-add-btn">
                    Add to Cart
                  </Button>
                  <CiHeart size="2.5rem" />
                </div>
              </article>
            </div>
          </section>
        </DetailComponent>
      </header>
    </section>
  );
};

export default Singleproduct;
