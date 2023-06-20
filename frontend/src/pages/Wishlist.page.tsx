import "../components/wishlist/wishlist.scss";
import Images from "../components/imageComponent/Images";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

const Wishlist = () => {
  return (
    <main className="pages-container">
      <section className="wishlist-container">
        <section className="wishlist-container-content">
          <div className="wishlist-title-container">
            <h3>My wishlist (0 item)</h3>
          </div>
          <section className="wishlist-whish-container">
            <article className="whislist-article-container">
              <div className="wishlist-image-container">
                <Images
                  src=""
                  alt=""
                  title=""
                />
                <div className="wishlist-icons">
                  <div>
                    <MdOutlineShoppingBag size="1.6rem" />
                  </div>
                  <div>
                    <FiTrash2 size="1.6rem" />
                  </div>
                </div>
              </div>
              <div className="wishlist-text-container">
                <h3>tailorname</h3>
                <p>color</p>
                <p>price</p>
                <p>available size</p>
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Wishlist;
