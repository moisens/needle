import { Disclosure } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";

const FilterContainer = () => {
  return (
    <section className="filter-container">
      {/*filter by price */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                !open ? "filter-btn-btn closed" : "filter-btn-btn"
              }`}
            >
              Filter by price{" "}
              <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
            </Disclosure.Button>
            <Disclosure.Panel className="filter-panel-content">
              <section className="price-prices">
                <label htmlFor="numberone" />
                <input type="number" name="numberone" className="price-input" />
                <span className="to-price">To</span>
                <label htmlFor="numbertwo" />
                <input type="number" name="numbertwo" className="price-input" />
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
                <button
                  className="add-remove-btn"
                  aria-label="Apply filter button"
                >
                  Apply
                </button>
                <button
                  className="add-remove-btn"
                  aria-label="Remove filter button"
                >
                  Remove
                </button>
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
            <Disclosure.Button
              className={`${
                !open ? "filter-btn-btn closed" : "filter-btn-btn"
              }`}
            >
              Filter by tailor{" "}
              <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
            </Disclosure.Button>
            <Disclosure.Panel className="filter-panel-content">
              <section className="panel-search">
                <label htmlFor="search" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search a tailor..."
                  className="panel-search-input"
                />
                <ul className="panel-list-results">
                  <li className="panel-list">Tailor 1</li>
                  <li className="panel-list">Tailor 2</li>
                  <li className="panel-list">Tailor 3</li>
                  <li className="panel-list">Tailor 4</li>
                </ul>
              </section>

              <section className="filter-btns">
                <button
                  className="add-remove-btn"
                  aria-label="Apply filter button"
                >
                  Apply
                </button>
                <button
                  className="add-remove-btn"
                  aria-label="Remove filter button"
                >
                  Remove
                </button>
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
            <Disclosure.Button
              className={`${
                !open ? "filter-btn-btn closed" : "filter-btn-btn"
              }`}
            >
              Filter by size{" "}
              <RiArrowDownSFill className={`${open ? "icon-rotate" : ""}`} />
            </Disclosure.Button>
            <Disclosure.Panel className="filter-panel-content">
              <section className="panel-filter-size">
                <button className="size-btns" aria-label="button select a size">
                  Small
                </button>
                <button className="size-btns" aria-label="button select a size">
                  Medium
                </button>
                <button className="size-btns" aria-label="button select a size">
                  Large
                </button>
                <button className="size-btns" aria-label="button select a size">
                  Extra Large
                </button>
              </section>
              <section className="filter-btns">
                <button
                  className="add-remove-btn"
                  aria-label="Apply filter button"
                >
                  Apply
                </button>
                <button
                  className="add-remove-btn"
                  aria-label="Remove filter button"
                >
                  Remove
                </button>
              </section>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*filter by size end*/}
    </section>
  );
};

export default FilterContainer;
