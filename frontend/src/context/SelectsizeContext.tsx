import { createContext, useState } from "react";

export type SizeAndIdType = {
  _id: string;
  size: string;
};
interface SelectSizeContextProp {
  chosenSize: SizeAndIdType[];
  setChosenSize: React.Dispatch<React.SetStateAction<SizeAndIdType[]>>;
}

const initialSizeStateContext: SelectSizeContextProp = {
  chosenSize: [],
  setChosenSize: () => {},
};

interface ChildrenProps {
  children: React.ReactNode;
}

const SelectSizeContext = createContext<SelectSizeContextProp>(
  initialSizeStateContext
);

export const SelectSizeProvider = ({ children }: ChildrenProps) => {
  const [chosenSize, setChosenSize] = useState<SizeAndIdType[]>([]);

  return (
    <SelectSizeContext.Provider
      value={{
        chosenSize,
        setChosenSize,
      }}
    >
      {children}
    </SelectSizeContext.Provider>
  );
};

export default SelectSizeContext;
