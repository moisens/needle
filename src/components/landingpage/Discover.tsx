import "./landingpage.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import Images from "../imageComponent/Images";
import LandingBtns from "./LandingBtns";

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
          <LandingBtns />
        </div>
        <div className="discover-image">
          <Images
            src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt="fashion"
            title="Your new style"
          />
        </div>
      </header>
    </div>
  );
};

export default Discover;
