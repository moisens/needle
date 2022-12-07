import "./clothes.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
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
              <Link to="/women-clothes">Clothes</Link>
            </span>
            <span className="links-links active">
              <MdOutlineKeyboardArrowRight size="1.6rem" />
              <Link to="/women-clothes">Jackets</Link>
            </span>
          </p>
        </section>
        <section className="settingsAndPage-container">
          <section className="settings-container">
            <nav className="sidebar-clothes-page">
              <ul className="clothes-ul">
                <li className="clothes-li">
                  <Link to="/women/clothes">Clothes</Link>
                </li>
                <li className="clothes-li">
                  <Link to="/women/clothes/jacket">Jackets</Link>
                </li>
                <li className="clothes-li">
                  <Link to="/women/clothes/shirt">Shirts</Link>
                </li>
                <li className="clothes-li">
                  <Link to="/women/clothes/pants">Pants/Trousers</Link>
                </li>
                <li className="clothes-li">
                  <Link to="/women/clothes/suit">Suits</Link>
                </li>
                <li className="clothes-li">
                  <Link to="/women/clothes/dress">Dress</Link>
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
          <section className="page-pagination-container">Pages</section>
        </section>
      </section>
    </section>
  );
};

export default Clothescontainer;
