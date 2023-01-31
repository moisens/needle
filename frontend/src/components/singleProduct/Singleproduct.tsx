import "./singleproduct.scss";
import { TiArrowLeftThick } from "react-icons/ti";
import Images from "../imageComponent/Images";
import { Disclosure } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
//import { BsHeartFill } from "react-icons/bs"
import { CiHeart } from "react-icons/ci";
import { useFetchSingleProduct } from "../../hooks/useFetchProduct";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const { _id } = useParams();
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(_id);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="singlepage-container">
      <section className="singlepage-content">
        <header className="singlepage-header">
          <section className="singlepage-backhome">
            <TiArrowLeftThick size="1.8rem" />
            Previous page
          </section>

          {status === "success" && (
            <section className="singlepage-product">
              <section className="image-container">
                <section className="big-image">
                  <Images
                    src={data?.data.product.image[0]}
                    alt={data?.data.product.tailorname}
                    title={data?.data.product.tailorname}
                  />
                </section>
                <section className="tiny-images-container">
                  {data?.data.product.image.map((img, index) => (
                    <section className="tiny-image" key={index}>
                      <Images
                        src={img}
                        alt={data?.data.product.tailorname}
                        title={data?.data.product.tailorname}
                      />
                    </section>
                  ))}
                </section>
              </section>
              <section className="single-product-infos">
                <h3 className="single-product-H3">
                  {data?.data.product.tailorname}
                </h3>
                <h4 className="single-product-H4">{`€ ${data?.data.product.price}`}</h4>
                {/*Description*/}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="single-product-disclosure-btn">
                        Description
                        <RiArrowDownSFill
                          className={open ? "notOpenIcon open" : "notOpenIcon"}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="single-product-disclosure-panel">
                        {data?.data.product.description}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/*End Description*/}
                {/*Size*/}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="single-product-disclosure-btn">
                        Size
                        <RiArrowDownSFill
                          className={open ? "notOpenIcon open" : "notOpenIcon"}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="single-product-disclosure-panel">
                        {data?.data.product.size.map((taille) => (
                          <p key={taille}>{taille}</p>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/*End Size*/}
                {/*Clothes's components*/}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="single-product-disclosure-btn">
                        Components
                        <RiArrowDownSFill
                          className={open ? "notOpenIcon open" : "notOpenIcon"}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="single-product-disclosure-panel">
                        {data?.data.product.clothesmaterials.map((material) => (
                          <p key={material}>{material}</p>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/*End Clothes's components*/}
                <section className="single-product-reviews">
                  <h5 className="single-product-revieww-H5">Reviews (4.5)</h5>
                  <section className="single-product-stars">
                    <FaStar size="1.2rem" />
                    <FaStar size="1.2rem" />
                    <FaStar size="1.2rem" />
                    <FaStar size="1.2rem" />
                    <FaStarHalf size="1.2rem" />
                  </section>
                </section>
                <section className="single-product-btns">
                  <button className="single-product-add-btn">
                    Add to cart
                  </button>
                  <button className="single-product-like-btn">
                    <CiHeart size="2.8rem" />
                  </button>
                </section>
              </section>
            </section>
          )}
        </header>
      </section>
    </section>
  );
};

export default Singleproduct;
