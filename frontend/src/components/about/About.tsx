import "./about.scss";
import Images from "../imageComponent/Images";
import Tailor from "../../assets/tailor.png";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-container">
      <section className="about-content">
        <section className="about-about">
          <section className="about-image">
          <Images src={Tailor} alt="tailor" title="tailor" />
            {/* <div className="image-content">
            <Images src={Tailor} alt="tailor" title="tailor" />
          </div> */}
          </section>
          <section className="about-text">
            <h2 className="about-title">About needle</h2>
            <p className="about-paragraph">
              Needle is a website that bring together rich customers and
              tailors / designers. We propose to ours clients, a great variety of
              clothes and shoes. Our target is mainly young adultes. But every
              one is welcome.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
