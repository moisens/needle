import "./landingpage.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";

type Props = {};

const Discover = (props: Props) => {
  return (
    <div className="discover-container">
      <header className="discover-header">
        <div className="discover-text">
          <h2 className="discover-title">Discover your new style!</h2>
          <p className="discover-paragraph">
            Let us inspire you with our great variety of fashion. Discover our
            tailor's creations. Before we start, what kind of fashion are you
            interested in ?
          </p>
          <div className="discover-btns">
            <Button 
              as="button" 
              className="btn-btndiscover" 
              handleClick={() => {}}
              aria-label="Link to men category"
            >
              <Link to="/women">Women</Link>
            </Button>
            <Button
              as="button"
              className="btn-btndiscover"
              handleClick={() => {}}
              aria-label="Link to men category"
            >
              <Link to="/men">Men</Link>
            </Button>
          </div>
        </div>
        <div className="discover-image">zafkzkjfbkjezbvjdzbvkjdbsvkjbsvkj</div>
      </header>
    </div>
  );
};

export default Discover;
