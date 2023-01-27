import "./singleproduct.scss";
import { TiArrowLeftThick } from "react-icons/ti";
import Images from "../imageComponent/Images";
import { Disclosure } from '@headlessui/react';
import { RiArrowDownSFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";



const Singleproduct = () => {
  return (
    <section className="singlepage-container">
      <section className="singlepage-content">
        <header className="singlepage-header">
          <section className="singlepage-backhome"><TiArrowLeftThick size="1.8rem" />Previous page</section>
          <section className="singlepage-product">
            <section className="image-container">
              <section className="big-image">
                <Images src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="tiny img prod" title="title prod" />
              </section>
              <section className="tiny-images-container">
                <section className="tiny-image">
                  <Images src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="tiny img prod" title="title prod" />
                </section>
                <section className="tiny-image">
                  <Images src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="tiny img prod" title="title prod" />
                </section>
                <section className="tiny-image">
                  <Images src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="tiny img prod" title="title prod" />
                </section>
                <section className="tiny-image">
                  <Images src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="tiny img prod" title="title prod" />
                </section>
              </section>
            </section>
            <section className="single-product-infos">
              <h2 className="single-product-H2">Product name</h2>
              <h4 className="single-product-H4">€ 500</h4>
              {/*Description*/}
              <Disclosure>
                {({ open }) => (
                  <>
                  <Disclosure.Button className="single-product-disclosure-btn">
                    Description
                    <RiArrowDownSFill className={open ? "notOpenIcon open" : "notOpenIcon"} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="single-product-disclosure-panel">
                    Very nice clothe!
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
                    <RiArrowDownSFill className={open ? "notOpenIcon open" : "notOpenIcon"} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="single-product-disclosure-panel">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
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
                    <RiArrowDownSFill className={open ? "notOpenIcon open" : "notOpenIcon"} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="single-product-disclosure-panel">
                    <p>Nylon</p>
                  </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/*End Clothes's components*/}
              <h5 className="single-product-reviews">Reviews (4.5)</h5>
              <section className="single-product-stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </section>
            </section>
          </section>
        </header>
      </section>
    </section>
  )
}

export default Singleproduct;

