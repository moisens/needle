import "./nav.scss";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { womenLinks } from "../../utils/linksNav";

type Props = {};

const categories = [
  { id: 1, category: "Women" },
  { id: 2, category: "Men" },
];

const Nav = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <nav className="navbar-container">
      <div className="logo">needle</div>
      <div className="nav-content">
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          <Listbox.Button className="category-container">
            <span className="selected-category">
              {selectedCategory.category} {<IoMdArrowDropdown />}
            </span>
          </Listbox.Button>
          <Listbox.Options className="listcategory-options">
            {categories.map((category) => (
              <Listbox.Option key={category.id} value={category} className="category-option">
                {category.category}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <ul className="uls-list">
          <li>Home</li>
          <li>Clothes</li>
          <li>Shoes</li>
        </ul>
        <div className="fav-cart-user">
          <div className="favorites-container">
            <AiOutlineHeart size="1.8rem" />
          </div>
          <div className="carts-container">
            <MdOutlineShoppingBag size="1.8rem" />
          </div>
          <div className="user-container">
            <CgProfile size="1.8rem" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
