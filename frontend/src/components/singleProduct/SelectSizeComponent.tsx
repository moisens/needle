import { CgRadioCheck } from "react-icons/cg";
import { MdRadioButtonChecked } from "react-icons/md";
import useSingleProduct from "../../hooks/useSingleProduct";

export type SizeProp = {
  onesize: string;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  customClass: string
};

const SelectSize = ({ onesize, setIsOn, customClass }: SizeProp) => {
  const { chosenSize, setChosenSize } = useSingleProduct();
  console.log(chosenSize);
  
  const handleChosenSize = () => {
    setChosenSize(onesize);
    setIsOn(false)
  };
  return (
    <div className={`${customClass}-size-size`} >
      <div className={`${customClass}-size`}>
        <input
          type="radio"
          id={`input-${onesize}`}
          value={onesize}
          checked={chosenSize === onesize}
          onChange={handleChosenSize}
        />
        <label htmlFor={`input-${onesize}`}>{onesize}</label>
      </div>
      <p>Available</p>
    </div>
  );
};

export default SelectSize;
