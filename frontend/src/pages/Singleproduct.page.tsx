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
              <section className="singlepage-infos-article-content">
                <article className="singlepage-article">
                  <h3 className="singlepage-article-h3">Description</h3>
                  <p className="singlepage-article-p">
                    {data?.data.product?.description}
                  </p>
                </article>
                <article className="singlepage-article">
                  <h3 className="singlepage-article-h3">Clothes materials</h3>
                  {/*//TODO: after modifiying the backend, use id as a key */}
                  {data?.data.product?.clothesmaterials.map((item) => (
                    <p className="singlepage-article-p" key={item}>
                      {item}
                    </p>
                  ))}
                </article>
              </section>
              <section className="singlepage-infos-image-section">
                <div className="singlepage-infos-imge">
                  <Images
                    src={data?.data.product?.image[0]}
                    alt={data?.data.product?.tailorname}
                    title={data?.data.product?.tailorname}
                  />
                </div>
              </section>
            </section>
          </section>
        </section>
      </>
    </main>
  );
};

export default SingleproductPage;
