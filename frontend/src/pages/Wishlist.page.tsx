import "../components/wishlist/wishlist.scss";
import WishList from "../components/wishlist/Wishlist";
import useLike from "../hooks/useLike";

const Wishlist = () => {
  const { like, totalLikes } = useLike();
  return (
    <main className="pages-container">
      <section className="wishlist-container">
        <section className="wishlist-container-content">
          <div className="wishlist-title-container">
            <h3>
              My wishlist ({totalLikes} {totalLikes <= 1 ? "item" : "items"})
            </h3>
          </div>
          <section className="wishlist-whish-container">
            {like.map((wish) => {
              const { _id } = wish;
              return <WishList key={_id} {...wish} />;
            })}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Wishlist;
