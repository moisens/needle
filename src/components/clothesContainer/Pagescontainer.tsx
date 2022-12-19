import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const Pagescontainer = () => {
  return (
    <section className="page-pagination-container">
      <Outlet />
      <section className="page-pagination-content">
        <section className="page-pagination-product">
          <section className="page-pagination-image">
            <img
              src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png"
              alt="img test"
            />
          </section>
          <section className="page-pagination-text">
            <h6 className="pagination-text-H6">Product's name</h6>
            <p className="pagination-text-price">&euro;500</p>
            <p className="pagination-text-color">color</p>
            <p className="pagination-text-size">
              <span className="pagination-text-span">Avalable sizes</span>: M,
              L, XL
            </p>
            <button className="pagination-product-btn">Add to cart</button>
          </section>
        </section>
        <section className="page-pagination-product">
          <section className="page-pagination-image">
            <img
              src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646861917/e-commerce-daddy-will-pay/tmp-1-1646861915599_knb30j.png"
              alt="img test"
            />
          </section>
          <section className="page-pagination-text">
            <h6 className="pagination-text-H6">Product's name</h6>
            <p className="pagination-text-price">&euro;500</p>
            <p className="pagination-text-color">color</p>
            <p className="pagination-text-size">
              <span className="pagination-text-span">Avalable sizes</span>: M,
              L, XL
            </p>
            <button className="pagination-product-btn">Add to cart</button>
          </section>
        </section>
        <section className="page-pagination-product">
          <section className="page-pagination-image">
            <img
              src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1645771930/e-commerce-daddy-will-pay/tmp-4-1645771929434_bjllop.png"
              alt="img test"
            />
          </section>
          <section className="page-pagination-text">
            <h6 className="pagination-text-H6">Product's name</h6>
            <p className="pagination-text-price">&euro;500</p>
            <p className="pagination-text-color">color</p>
            <p className="pagination-text-size">
              <span className="pagination-text-span">Avalable sizes</span>: M,
              L, XL
            </p>
            <button className="pagination-product-btn">Add to cart</button>
          </section>
        </section>
      </section>
      <section className="page-pagination-btns">
        <button className="pagination-btn-btn prev-btn">
          <RiArrowLeftSLine size="2rem" color="#fff" />
        </button>
        <button className="page-bnts-btns">1</button>
        <button className="page-bnts-btns">2</button>
        <button className="page-bnts-btns">3</button>
        <button className="pagination-btn-btn next-btn">
          <RiArrowRightSLine size="2rem" color="#fff" />
        </button>
      </section>
    </section>
  );
};

export default Pagescontainer;
