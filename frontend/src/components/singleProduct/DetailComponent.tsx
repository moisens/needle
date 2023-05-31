import { RiArrowDownSFill } from "react-icons/ri";
import Images from "../imageComponent/Images";
import "./detail.scss";
import { CgRadioCheck } from "react-icons/cg"; //, CgRadioChecked
import Button from "../button/Button";
import { CiHeart } from "react-icons/ci";
//import { BsHeartFill } from "react-icons/bs";

const DetailComponent = () => {
  return (
    <section className="detail-container">
      <div className="detail-detail-content">
        <section className="detail-images-container">
          <div className="detail-slide">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="detail-img">
            <Images src="" alt="" title="" />
          </div>
        </section>
        <article className="detail-article">
          <h3 className="detail-heading-3">Tailor name</h3>
          <div className="detail-pricing">
            <h4 className="detail-heading-4">1600€</h4>
            <p>Includes VTA</p>
          </div>
          <p className="detail-p">
            <span className="detail-color">Color</span>: red
          </p>
          <div className="detail-slide-article">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="detail-size-container">
            <div className="detail-size-title">
              <p>Select your size</p>
              <RiArrowDownSFill />
            </div>
            <div className="detail-size-content">
              <div className="detail-size-size">
                <div className="detail-size">
                  <CgRadioCheck />
                  <p>L</p>
                  <p>Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-add-like-btns">
            <Button as="button" className="detail-add-btn">
              Add to Cart
            </Button>
            <CiHeart />
          </div>
        </article>
      </div>
    </section>
  );
};

export default DetailComponent;
