import "./singleproduct.scss";
import { TiArrowLeftThick } from "react-icons/ti";



const Singleproduct = () => {
  return (
    <section className="singlepage-container">
      <section className="singlepage-content">
        <header className="singlepage-header">
          <section className="singlepage-backhome"><TiArrowLeftThick size="1.8rem" />Previous page</section>
          <section className="singlepage-product"></section>
        </header>
      </section>
    </section>
  )
}

export default Singleproduct;

