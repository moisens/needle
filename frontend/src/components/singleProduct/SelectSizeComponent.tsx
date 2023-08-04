import { RadioGroup } from "@headlessui/react";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import useSingleProduct from "../../hooks/useSingleProduct";
import { ResponseIProducts } from "../../types/typeDatas";

type SelectSize = {
  data: ResponseIProducts;
};

const SelectSize = ({ data }: SelectSize) => {
  const { chosenSize, setChosenSize } = useSingleProduct();

  return (
    <RadioGroup value={chosenSize} onChange={setChosenSize}>
      {data?.data.product?.size?.map((onseSize) => (
        <RadioGroup.Option value={onseSize} key={onseSize}>
          {({ checked }) => (
            <>
              <span className={checked ? "style-checked" : ""}>
                {/* //TODO: Change the style!!!!*/}
                {checked ? (
                  <IoIosRadioButtonOn />
                ) : (
                  <IoMdRadioButtonOff color="hsl(265, 69%, 59%)" />
                )}
              </span>
              <div>{onseSize}</div> <p>Available</p>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default SelectSize;
