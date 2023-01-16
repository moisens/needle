import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
//import RenderProduct from "../renderProduct/Product";

const Pagescontainer = () => {
  return (
    <section className="page-pagination-container">
      <section className="page-pagination-content">
        <Outlet />
      </section>
      <section className="page-pagination-btns">
        <button className="pagination-btn-btn prev-btn">
          <RiArrowLeftSLine size="2rem" color="#fff" />
        </button>
        <button className="page-bnts-btns">1</button>
        <button className="page-bnts-btns">2</button>
        <button className="page-bnts-btns">3</button>
        <button className="pagination-btn-btn next-btn">
          <RiArrowRightSLine size="2rem" color="#fff" />
        </button>
      </section>
    </section>
  );
};

export default Pagescontainer;
