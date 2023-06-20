import Images from "../components/imageComponent/Images";

const Wishlist = () => {
  return (
    <main className="pages-container">
      <section className="wishlist-container">
        <section className="wishlist-container-content">
          <div className="wishlist-title-conainer">
            <h3>My wishlist (0 item)</h3>
          </div>
          <section className="wishlist-whish-container">
            <article className="whislist-article-container">
              <div className="wishlist-image-container">
                <Images src="" alt="" title="" />
              </div>
              <div className="wishlist-text-container">
                <h3>tailorname</h3>
                <p>color</p>
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

/*
Van Brueghel
€ 460

red

Available sizes: M, L, XL

*/
