import "./footer.scss";
import {
  navWomenClothes,
  navWomenShoes,
  navmenClothes,
  navmenShoes,
} from "../../utils/linksNav";
import Linksfooter from "./Linksfooter";

const Footer = () => {
  const now = new Date().getUTCFullYear();

  return (
    <footer>
      <nav className="footer-container">
        <section className="footer-nav">
          <Linksfooter links={navWomenClothes} />
          <Linksfooter links={navWomenShoes} />
          <Linksfooter links={navmenClothes} />
          <Linksfooter links={navmenShoes} />
        </section>
        <section className="footer-copyrigth">
          &copy; {`${now}`} needle. All rights reserved.
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
