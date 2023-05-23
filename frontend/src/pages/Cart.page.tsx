import "../components/cart/cart.scss";
import Images from "../components/imageComponent/Images";



const Cartpage = () => {
  return (
    <main className="pages-container">
      <section className="cartpage-container">
        <section className="cart-items-numbers">
          <h3>My Cart (3 items)</h3>
        </section>
        <header className="cart-header">
          <section className="cartpage-articles-container">
            <article className="articles-content">
              <div className="article-image-container">
                <Images src="" alt="Cart" title="cart" />
              </div>
              <div className="article-infos-container">
                <div className="article-infos-infos">
                  <div className="article-infos-content">
                    <h3>Tailor name</h3>
                    <p>color: red</p>
                    <p>size: L</p>
                  </div>
                  <div className="article-form-content">
                    <label htmlFor="item-number" />
                    <input type="number" />
                  </div>
                </div>
                <div className="article-infos-price">delete Move to Price</div>
              </div>
            </article>
          </section>
          <section className="cartpage-total-container">checkout section</section>
        </header>
      </section>
    </main>
  )
}

export default Cartpage;