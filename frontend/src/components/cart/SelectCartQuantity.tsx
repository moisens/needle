import { Listbox } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { IProducts } from "../../types/typeDatas";
import useCart from "../../hooks/useCart";

export type ItemsProps = {
  item: IProducts;
};

const SelectCartQuantity = ({ item }: ItemsProps) => {
  const { inventory } = item;
  const { REDUCER_ACTIONS, dispatch } = useCart();

  const optionValues: number[] = [...Array(inventory).keys()].map((i) => i + 1);
  const onChangeQty = (value: number) =>
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: value },
    });

  return (
    <section className="article-section-container">
      <Listbox value={item.qty} onChange={onChangeQty}>
        <div className="select-select-content">
          <Listbox.Button className="select-button">
            <span className="block truncate">{item.qty}</span>
            <span>
              <RiArrowDownSFill />
            </span>
          </Listbox.Button>
          <Listbox.Options className="article-quantity-container">
            {optionValues.map((quantity) => (
              <Listbox.Option
                className="article-qty"
                value={quantity}
                key={`opt-${quantity}`}
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
