import { CgRadioCheck } from "react-icons/cg";
import { MdRadioButtonChecked } from "react-icons/md";
import useCart from "../../hooks/useCart";

export type SizeProp = {
  onesize: string;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  customClass: string
};

const SelectSize = ({ onesize, setIsOn, customClass }: SizeProp) => {
  const { chosenSize, setChosenSize } = useCart();
  const handleChosenSize = () => {
    setChosenSize(onesize);
    setIsOn(false)
  };
  return (
    <div className={`${customClass}-size-size`} onClick={handleChosenSize}>
      <div className={`${customClass}-size`}>
        {chosenSize !== onesize ? (
          <CgRadioCheck size="1.8rem" />
        ) : (
          <MdRadioButtonChecked size="1.8rem" />
        )}

        <p>{onesize}</p>
      </div>
      <p>Available</p>
    </div>
  );
};

export default SelectSize;
