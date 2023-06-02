import { CgRadioCheck } from "react-icons/cg";
import { MdRadioButtonChecked } from "react-icons/md";

export type SizeProp = {
  onesize: string;
  chosenSize: string;
  setChoseSize: React.Dispatch<React.SetStateAction<string>>;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
};

const SelectSize = ({ onesize, chosenSize, setChoseSize, setIsOn }: SizeProp) => {
  const handleChosenSize = () => {
    setChoseSize(onesize);
    setIsOn(false)
  };
  return (
    <div className="single-size-size" onClick={handleChosenSize}>
      <div className="single-size">
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
