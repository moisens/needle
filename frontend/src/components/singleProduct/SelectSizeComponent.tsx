import { CgRadioCheck } from "react-icons/cg";
import { MdRadioButtonChecked } from "react-icons/md";
import useSingleProduct from "../../hooks/useSingleProduct";
import { RadioGroup } from "@headlessui/react";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";

export type SizeProp = {
  onesize: string;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  customClass: string
};
//TODO: Remove select component or not
const SelectSize = ({ onesize, setIsOn, customClass }: SizeProp) => {
  const { chosenSize, setChosenSize } = useSingleProduct();
  //console.log(chosenSize);
  
  //const handleChosenSize = () => {
  //  setChosenSize(onesize);
  //  setIsOn(false)
  //};
  return (
    <div className={`${customClass}-size-size`} >
      <div className={`${customClass}-size`}>
        {/* <input
          type="radio"
          id={`input-${onesize}`}
          value={onesize}
          checked={chosenSize === onesize}
          onChange={handleChosenSize}
        />
        <label htmlFor={`input-${onesize}`}>{onesize}</label> */}
      <RadioGroup
      value={chosenSize}
      onChange={setChosenSize}
      >
      <RadioGroup.Option
      value={onesize}
      >
        {({ checked }) => (
                <>
                  <span className={checked ? "style-checked" : ""}>
                    {checked ? (
                      <IoIosRadioButtonOn />
                    ) : (
                      <IoMdRadioButtonOff color="hsl(265, 69%, 59%)" />
                    )}
                  </span>
                  {onesize}
                </>
              )}
      </RadioGroup.Option>
      </RadioGroup>
      </div>
      <p>Available</p>
    </div>
  );
};

export default SelectSize;
