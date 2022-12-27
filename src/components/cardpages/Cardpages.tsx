import { ProductsDataType } from "../../types/typeDatas"



const Cardpages = ({ products }: ProductsDataType) => {
  
  console.log("PROD",products);
  
  return (
    <>
    {products?.products?.map(product => (
      <section className="page-pagination-product" key={product.id}>
      <section className="page-pagination-image">
        <img
          src={product.image[0]}
          alt={product.tailorname}
        />
      </section>
      <section className="page-pagination-text">
        <h6 className="pagination-text-H6">{product.tailorname}</h6>
        <p className="pagination-text-price">&euro;{product.price}</p>
        <p className="pagination-text-color">{product.color}</p>
        <p className="pagination-text-size">
          <span className="pagination-text-span">Avalable sizes</span>: {product.size}
        </p>
        <button className="pagination-product-btn">Add to cart</button>
      </section>
    </section>
    ))}
    </>
  )
}

export default Cardpages


/*

<section className="page-pagination-product">
  <section className="page-pagination-image">
    <img
      src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png"
      alt="img test"
    />
  </section>
  <section className="page-pagination-text">
    <h6 className="pagination-text-H6">Product's name</h6>
    <p className="pagination-text-price">&euro;500</p>
    <p className="pagination-text-color">color</p>
    <p className="pagination-text-size">
      <span className="pagination-text-span">Avalable sizes</span>: M, L,
      XL
    </p>
    <button className="pagination-product-btn">Add to cart</button>
  </section>
</section>

*/