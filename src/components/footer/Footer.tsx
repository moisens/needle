import "./footer.scss";
import { navWomenClothes } from "../../utils/linksNav";
import { Link } from "react-router-dom";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <section className="footer-container">
        <ul className="footer-nav">
          {navWomenClothes.map(clothes => {
            const { id, url, text } = clothes;
            return(
              <ul key={id}>
                <li><Link to={url}>{text}</Link></li>
              </ul>
            )
          })}
          <ul>
            <li>Women</li>
            <li>Shoes</li>
            <li>Stilettos</li>
            <li>Ankle boots</li>
            <li>Sandals</li>
          </ul>
          <ul>
            <li>Men</li>
            <li>Clothes</li>
            <li>Jackets</li>
            <li>Shirts</li>
            <li>Pants/Trousers</li>
            <li>Suits</li>
          </ul>
          <ul>
            <li>Men</li>
            <li>Shoes</li>
          </ul>
        </ul>
        <div className="footer-copyrigth">&copy; 2022 needle. All rights reserved</div>
      </section>
    </footer>
  )
}

export default Footer;