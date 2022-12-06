import "./clothes.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {};

const Clothescontainer = (props: Props) => {
  return (
    <section className="clothes-container">
      <section className="clothes-content">
        <section className="clothes-links">
          <p className="links-links">
            <Link to="/women">Women</Link>
            <span className="links-links active">
              {" "}
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="/women-clothes">Clothes</Link>
            </span>
            <span className="links-links active">
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="/women-clothes">Jackets</Link>
            </span>
          </p>
        </section>
        <section className="settingsAndPage-container">
          <section className="settings-container">
          <nav className="sidebar-clothes-page">
            <ul className="clothes-ul">
              <li className="clothes-li"><Link to="/women/clothes">Clothes</Link></li>
              <li className="clothes-li"><Link to="/women/clothes/jacket">Jackets</Link></li>
              <li className="clothes-li"><Link to="/women/clothes/shirt">Shirts</Link></li>
              <li className="clothes-li"><Link to="/women/clothes/pants">Pants/Trousers</Link></li>
              <li className="clothes-li"><Link to="/women/clothes/suit">Suits</Link></li>
              <li className="clothes-li"><Link to="/women/clothes/dress">Dress</Link></li>
            </ul>
          </nav>
          </section>
          <section className="page-pagination-container">
            Pages
          </section>
        </section>
      </section>
    </section>
  );
};

export default Clothescontainer;
