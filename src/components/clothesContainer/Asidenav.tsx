import { Link } from "react-router-dom";

const Asidenav = () => {
  return (
    <div>
      <nav className="sidebar-clothes-page">
      <ul className="clothes-ul">
        <li className="clothes-li">
          <Link to="clothes">Clothes</Link>
        </li>
        <li className="clothes-li">
          <Link to="jackets">Jackets</Link>
        </li>
        <li className="clothes-li">
          <Link to="shirts">Shirts</Link>
        </li>
        <li className="clothes-li">
          <Link to="pants">Pants/Trousers</Link>
        </li>
        <li className="clothes-li">
          <Link to="suits">Suits</Link>
        </li>
        <li className="clothes-li">
          <Link to="dress">Dress</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Asidenav;
