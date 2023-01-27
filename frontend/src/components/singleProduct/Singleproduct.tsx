import "./singleproduct.scss";
import { TiArrowLeftThick } from "react-icons/ti";
import Images from "../imageComponent/Images";



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
              product
            </section>
          </section>
        </header>
      </section>
    </section>
  )
}

export default Singleproduct;

