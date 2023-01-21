import { Outlet } from "react-router-dom";

const Pagescontainer = () => {
  return (
    <section className="page-pagination-container">
      <section className="page-pagination-content">
        <Outlet />
      </section>
    </section>
  );
};

export default Pagescontainer;
