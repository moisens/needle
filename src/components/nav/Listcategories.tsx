import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { primaryCategories } from "../../utils/categories";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {}

const Listcategories = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(primaryCategories[0]);
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
            {primaryCategories.map((category) => (
              <Listbox.Option key={category.id} value={category} className="category-option">
                {category.category}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
  )
}

export default Listcategories;