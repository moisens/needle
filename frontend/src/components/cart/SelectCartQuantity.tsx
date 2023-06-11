import { Listbox } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { IProducts } from "../../types/typeDatas";

export type ItemsProps = {
  item: IProducts;
  selectQty: number;
  setSelectQty: React.Dispatch<React.SetStateAction<number>>;
};

const SelectCartQuantity = ({ item, selectQty, setSelectQty }: ItemsProps) => {
  const { inventory } = item;

  const optionValues: number[] = [...Array(inventory).keys()].map((i) => i + 1);

  return (
    <section className="article-section-container">
      <Listbox value={selectQty} onChange={setSelectQty}>
        {/**/}
        <div className="select-select-content">
          <Listbox.Button className="select-button">
            <span className="block truncate">{selectQty}</span>
            <span>
              <RiArrowDownSFill />
            </span>
          </Listbox.Button>
          <Listbox.Options className="article-quantity-container">
            {optionValues.map((quantity) => (
              <Listbox.Option
                className="article-qty"
                value={quantity}
                key={`opt${quantity}`}
              >
                {quantity}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </section>
  );
};

export default SelectCartQuantity;
