import { createContext, useState } from "react";

interface SelectSizeContextProp {
  chosenSize: string;
  setChosenSize: React.Dispatch<React.SetStateAction<string>>;
}

const initialSizeStateContext: SelectSizeContextProp = {
  chosenSize: "",
  setChosenSize: () => {},
};

interface ChildrenProps {
  children: React.ReactNode;
}

const SelectSizeContext = createContext<SelectSizeContextProp>(
  initialSizeStateContext
);

export const SelectSizeProvider = ({ children }: ChildrenProps) => {
  const [chosenSize, setChosenSize] = useState<string>("");

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
