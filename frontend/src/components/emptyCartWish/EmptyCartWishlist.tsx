import Button from "../button/Button";


const EmptyCartWishlist = () => {


  return (
    <section className="cart-empty">
      <div className="cart-emty-template">
        <div className="fake-img-square"></div>
        <div className="fake-text-section">
          <div className="fake-text-line"></div>
          <div className="fake-text-line short"></div>
          <div className="fake-img-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="fake-btn">+</div>
        </div>
      </div>
      <div className="cart-emty-infos">
        <h4 className="cart-emty-h4">Your cart is empty!</h4>
        <p>Would you like to add some products?</p>
        {/* //TODO: conditionally change the text: user ? 'something' : 'something else' */}
        <Button as="button" className="empty-btn-btn">
          Connect
        </Button>
        {/* //TODO: conditionally change the Button text: user ? 'Go to Homepage' : 'something else' */}
      </div>
    </section>
  );
};

export default EmptyCartWishlist;
