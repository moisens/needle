import "./clothes.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

type Props = {};

const Clothescontainer = (props: Props) => {
  return (
    <section className="clothes-container">
      <section className="clothes-content">
        <section className="clothes-links">
          <p className="links-links">
            <Link to="/women">Women</Link>
            <span className="links-links active">
              {" "}
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="women-clothes">Clothes</Link>
            </span>
            <span className="links-links active">
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="jackets">Jackets</Link>
            </span>
          </p>
        </section>
        <section className="settingsAndPage-container">
          <section className="settings-container">
            <nav className="sidebar-clothes-page">
              <ul className="clothes-ul">
                <li className="clothes-li">
                  <Link to="women-clothes">Clothes</Link>
                </li>
                <li className="clothes-li">
                  <Link to="jackets">Jackets</Link>
                </li>
                <li className="clothes-li">
                  <Link to="shirts">Shirts</Link>
                </li>
                <li className="clothes-li">
                  <Link to="pants">Pants/Trousers</Link>
                </li>
                <li className="clothes-li">
                  <Link to="suits">Suits</Link>
                </li>
                <li className="clothes-li">
                  <Link to="dress">Dress</Link>
                </li>
              </ul>
              
            </nav>
            <section className="filter-container">
              {/*filter by price */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${!open ? "filter-btn-btn closed" : "filter-btn-btn"}`}>
                      Filter by price <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="filter-panel-content">
                      <section className="price-prices">
                        <label htmlFor="numberone" />
                        <input
                          type="number"
                          name="numberone"
                          className="price-input"
                        />
                        <span className="to-price">To</span>
                        <label htmlFor="numbertwo" />
                        <input
                          type="number"
                          name="numbertwo"
                          className="price-input"
                        />
                      </section>
                      <section className="filter-slider">
                        <label htmlFor="slider" />
                        <input
                          type="range"
                          name="slider"
                          className="filter-price-slider"
                        />
                      </section>
                      <section className="filter-btns">
                        <button className="add-remove-btn" aria-label="Apply filter button">Apply</button>
                        <button className="add-remove-btn" aria-label="Remove filter button">Remove</button>
                      </section>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/*filter by price end*/}
              {/*filter by tailor*/}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${!open ? "filter-btn-btn closed" : "filter-btn-btn"}`}>
                      Filter by tailor <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="filter-panel-content">
                      <section className="panel-search">
                        <label htmlFor="search" />
                        <input type="text" name="search" placeholder="Search a tailor..." className="panel-search-input" />
                        <ul className="panel-list-results">
                          <li className="panel-list">Tailor 1</li>
                          <li className="panel-list">Tailor 2</li>
                          <li className="panel-list">Tailor 3</li>
                          <li className="panel-list">Tailor 4</li>
                        </ul>
                      </section>
                      
                      <section className="filter-btns">
                        <button className="add-remove-btn" aria-label="Apply filter button">Apply</button>
                        <button className="add-remove-btn" aria-label="Remove filter button">Remove</button>
                      </section>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/*filter by tailor end*/}
              {/*filter by size*/}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${!open ? "filter-btn-btn closed" : "filter-btn-btn"}`}>
                      Filter by size <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="filter-panel-content">
                      <section className="panel-filter-size">
                        <button className="size-btns" aria-label="button select a size">Small</button>
                        <button className="size-btns" aria-label="button select a size">Medium</button>
                        <button className="size-btns" aria-label="button select a size">Large</button>
                        <button className="size-btns" aria-label="button select a size">Extra Large</button>
                      </section>
                      <section className="filter-btns">
                        <button className="add-remove-btn" aria-label="Apply filter button">Apply</button>
                        <button className="add-remove-btn" aria-label="Remove filter button">Remove</button>
                      </section>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/*filter by size end*/}
            </section>
          </section>
          <section className="page-pagination-container">
            <section className="page-pagination-content">
              <section className="page-pagination-product">
                <section className="page-pagination-image">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646882533/e-commerce-daddy-will-pay/tmp-5-1646882532306_w63tjk.png" alt="img test" />
                </section>
                <section className="page-pagination-text">
                  <h6 className="pagination-text-H6">Product's name</h6>
                  <p className="pagination-text-price">&euro;500</p>
                  <p className="pagination-text-color">color</p>
                  <p className="pagination-text-size"><span className="pagination-text-span">Avalable sizes</span>: M, L, XL</p>
                  <button className="pagination-product-btn">Add to cart</button>
                </section>
              </section>
              <section className="page-pagination-product">
                <section className="page-pagination-image">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1646861917/e-commerce-daddy-will-pay/tmp-1-1646861915599_knb30j.png" alt="img test" />
                </section>
                <section className="page-pagination-text">
                  <h6 className="pagination-text-H6">Product's name</h6>
                  <p className="pagination-text-price">&euro;500</p>
                  <p className="pagination-text-color">color</p>
                  <p className="pagination-text-size"><span className="pagination-text-span">Avalable sizes</span>: M, L, XL</p>
                  <button className="pagination-product-btn">Add to cart</button>
                </section>
              </section>
              <section className="page-pagination-product">
                <section className="page-pagination-image">
                <img src="https://res.cloudinary.com/dr7qigh2d/image/upload/v1645771930/e-commerce-daddy-will-pay/tmp-4-1645771929434_bjllop.png" alt="img test" />
                </section>
                <section className="page-pagination-text">
                  <h6 className="pagination-text-H6">Product's name</h6>
                  <p className="pagination-text-price">&euro;500</p>
                  <p className="pagination-text-color">color</p>
                  <p className="pagination-text-size"><span className="pagination-text-span">Avalable sizes</span>: M, L, XL</p>
                  <button className="pagination-product-btn">Add to cart</button>
                </section>
              </section>
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
        </section>
      </section>
    </section>
  );
};

export default Clothescontainer;
