import "./footer.scss";
import {
  navWomenClothes,
  navWomenShoes,
  navmenClothes,
  navmenShoes,
} from "../../utils/linksNav";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <nav className="footer-container">
        <section className="footer-nav">
          <ul className="ul-links">
            {navWomenClothes.map((clothes) => {
              const { id, url, text } = clothes;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="ul-links">
            {navWomenShoes.map((shoe) => {
              const { id, url, text } = shoe;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="ul-links">
            {navmenClothes.map((clothe) => {
              const { id, url, text } = clothe;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="ul-links">
            {navmenShoes.map((shoe) => {
              const { id, url, text } = shoe;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="footer-copyrigth">
          &copy; 2022 needle. All rights reserved
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
