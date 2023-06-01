export type ChildrenProps = {
  children: React.ReactNode;
}


const DetailComponent = ({ children }: ChildrenProps) => {
  return (
    <div>{children}</div>
  );
};

export default DetailComponent;




/*

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
          </div>
          <div className="detail-size-container">
            <div className="detail-size-title">
              <p>Select your size</p>
              <RiArrowDownSFill />
            </div>
            <div className="detail-size-content">
              <div className="detail-size-size">
                <div className="detail-size">
                  <CgRadioCheck size="1.8rem" />
                  <p>L</p>
                </div>
                <p>Available</p>
              </div>
              <div className="detail-size-size">
                <div className="detail-size">
                  <CgRadioCheck size="1.8rem" />
                  <p>M</p>
                </div>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="detail-add-like-btns">
            <Button as="button" className="detail-add-btn">
              Add to Cart
            </Button>
            <CiHeart size="2.5rem"/>
          </div>
        </article>
      </div>
    </section>

*/
