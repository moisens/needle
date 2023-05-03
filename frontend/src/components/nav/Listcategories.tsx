import { Menu } from "@headlessui/react";
import { primaryCategories } from "../../utils/categories";
import { IoMdArrowDropdown } from "react-icons/io";
import useMaincategory from "../../hooks/useMaincategory";
import { NavLink } from "react-router-dom";

const Listcategories = () => {
  const { selectedCategory, setSelectedCategory } = useMaincategory();


  return (
    <section className="category-container">
      <Menu>
        <Menu.Button className="btn-btn">
          {selectedCategory ? selectedCategory : "Gender"} <IoMdArrowDropdown />
        </Menu.Button>
        <Menu.Items className="listcategory-options">
          {primaryCategories.map((category) => (
            <Menu.Item key={category.id}>
              <NavLink
                to={category.url}
                className={({ isActive }) =>
                  isActive
                    ? "category-option activeCategory"
                    : "category-option"
                }
                onClick={() => setSelectedCategory(category.category)}
              >
                {category.category}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </section>
  );
};

export default Listcategories;
