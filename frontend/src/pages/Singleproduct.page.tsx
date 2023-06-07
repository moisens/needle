import "./pages.scss";
import "../components/singleProduct/singleproduct.scss";
import { BsArrowLeft } from "react-icons/bs";
import SinglepageComponent from "../components/singleProduct/SinglepageComponent";
import useSingleProduct from "../hooks/useSingleProduct";
import { ResponseIProducts } from "../types/typeDatas";
import Images from "../components/imageComponent/Images";

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
              <>Fallback component when no data!</>
            )}
          </header>
          <section className="singlepage-infos-section">
            <section className="singlepage-infos-container">
              <div className="singlepage-infos-article-content">
                <article className="singlepage-article">
                  <h2>Description</h2>
                  <p>
                    Reinvent the wheel locked and loaded, so time vampire cross
                    sabers note for the previous submit: the devil should be on
                    the left shoulder yet we should leverage.
                  </p>
                </article>
                <article className="singlepage-article">
                  <h2>Description</h2>
                  <p>
                    Reinvent the wheel locked and loaded, so time vampire cross
                    sabers note for the previous submit: the devil should be on
                    the left shoulder yet we should leverage.
                  </p>
                </article>
              </div>
              <div className="singlepage-infos-image">
                <Images src="" alt="" />
              </div>
            </section>
          </section>
        </section>
      </>
    </main>
  );
};

export default SingleproductPage;
