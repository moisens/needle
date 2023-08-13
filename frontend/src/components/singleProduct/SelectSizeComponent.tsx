import { RadioGroup } from "@headlessui/react";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { ResponseIProducts } from "../../types/typeDatas";
import useSelectsize from "../../hooks/useSelectSizeContext";

type SelectSize = {
  data: ResponseIProducts;
};

const SelectSize = ({ data }: SelectSize) => {
  const { chosenSize, setChosenSize } = useSelectsize();
  console.log(chosenSize);
  


  const handleSizeChange = (productId: string) => (newSize: string) => {
    setChosenSize((prevSizes) => {
      const updatedSizes = [...prevSizes];
      const existingIndex = updatedSizes.findIndex(item => item._id === productId);

      if (existingIndex !== -1) {
        updatedSizes[existingIndex] = { _id: productId, size: newSize}
      } else {
        updatedSizes.push({ _id: productId, size: newSize })
      }
      return updatedSizes;
    });
  };

  const selectedSizeObj = chosenSize.find(item => item._id === data?.data.product?._id);
  const selectedSize = selectedSizeObj ? selectedSizeObj.size : ""

  return (
    <RadioGroup value={selectedSize} onChange={handleSizeChange(data?.data.product?._id)}>
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
