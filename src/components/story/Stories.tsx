import "./stories.scss";
import Button from "../button/Button";

const Stories = () => {
  return (
    <section className="stories-container">
      <section className="stories-content">
        {/*Story 1*/}
        <section className="stories-story">
          <section className="story-image-container">
            <section className="story-image-content">
              <section className="story-image-content">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646955844/e-commerce-daddy-will-pay/tmp-1-1646955843219_rd0igx.png" />
              </section>
            </section>
          </section>
          <section className="story-text-container">
            <h2 className="stories-titleH2">Story</h2>
            <p className="stories-paragraph">
              Reinvent the wheel locked and loaded, so time vampire cross sabers
              note for the previous submit: the devil should be on the left
              shoulder yet we should leverage.
            </p>
            <button className="stories-button">Discover</button>
          </section>
        </section>
        {/*End Story 1*/}
        {/*Story 2*/}
        <section className="stories-story">
          <section className="story-image-container">
            <section className="story-image-content">
              <section className="story-image-content">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646958994/e-commerce-daddy-will-pay/tmp-1-1646958993366_lqky0e.png" />
              </section>
            </section>
          </section>
          <section className="story-text-container">
            <h2 className="stories-titleH2">Story</h2>
            <p className="stories-paragraph">
              Reinvent the wheel locked and loaded, so time vampire cross sabers
              note for the previous submit: the devil should be on the left
              shoulder yet we should leverage.
            </p>
            <button className="stories-button">Discover</button>
          </section>
        </section>
        {/*End Story 2*/}
        {/*Story 3*/}
        <section className="stories-story">
          <section className="story-image-container">
            <section className="story-image-content">
              <section className="story-image-content">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" />
              </section>
            </section>
          </section>
          <section className="story-text-container">
            <h2 className="stories-titleH2">Story</h2>
            <p className="stories-paragraph">
              Reinvent the wheel locked and loaded, so time vampire cross sabers
              note for the previous submit: the devil should be on the left
              shoulder yet we should leverage.
            </p>
            <button className="stories-button">Discover</button>
          </section>
        </section>
        {/*End Story 3*/}
        <section className="story-btn-btn">
          <Button as="button" className="btns-story-btns">Load more</Button>
        </section>
      </section>
    </section>
  );
};

export default Stories;
