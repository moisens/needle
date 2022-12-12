import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { primaryCategories } from "../../utils/categories";
import { IoMdArrowDropdown } from "react-icons/io";
import useMaincategory from "../../hooks/useMaincategory";
import { Link } from "react-router-dom";

const Listcategories = () => {
  const { selectedCategory, setSelectedCategory } = useMaincategory();

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Listbox.Button className="category-container">
        <div className="btn-btn">
          <span className="selected-category">
            {selectedCategory.category} {<IoMdArrowDropdown />}
          </span>
        </div>
      </Listbox.Button>
      <Listbox.Options className="listcategory-options">
      <Link to={`${selectedCategory.url}`}>
        {primaryCategories.map((category) => (
          <Listbox.Option
            key={category.id}
            value={category}
            className="category-option"
          >
              {category.category}
          </Listbox.Option>
        ))}
      </Link>
        
      </Listbox.Options>
    </Listbox>
  );
};

export default Listcategories;
