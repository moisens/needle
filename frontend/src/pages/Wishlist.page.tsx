import "../components/emptyCartWish/emptycartwish.scss";
import "../components/wishlist/wishlist.scss";
import WishList from "../components/wishlist/Wishlist";
import useLike from "../hooks/useLike";
import EmptyCartWishlist from "../components/emptyCartWish/EmptyCartWishlist";

const Wishlist = () => {
  const { like, totalLikes } = useLike();
  return (
    <main className="pages-container">
      <section className="wishlist-container">
        {totalLikes >= 1 ? (
          <section className="wishlist-container-content">
            <div className="wishlist-title-container">
              <h3>
                My wishlist ({totalLikes} {totalLikes <= 1 ? "item" : "items"})
              </h3>
            </div>
            <section className="wishlist-whish-container">
              {like.map((wish) => {
                const { _id } = wish;
                return <WishList key={_id} wish={wish} />;
              })}
            </section>
          </section>
        ) : (
          <EmptyCartWishlist />
        )}
      </section>
    </main>
  );
};

export default Wishlist;
