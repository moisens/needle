import { CgRadioCheck } from "react-icons/cg";

export type SizeProp = {
  onesize: string;
};

const SelectSize = ({ onesize }: SizeProp) => {
  return (
    <div className="single-size-size">
      <div className="single-size">
        <CgRadioCheck size="1.8rem" />
        <p>{onesize}</p>
      </div>
      <p>Available</p>
    </div>
  );
};

export default SelectSize;
