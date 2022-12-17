import "./forms.scss";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { chooseStyles } from "../../utils/categories";
import toast, { Toaster } from 'react-hot-toast';

const FormNewsletter = () => {
  const [selected, setSelected] = useState(chooseStyles[0]);
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing...", selected.text, email);
    if (!email) return;
    toast.success("You successfully subscribed")
  };

  return (
    <>
      <h2 className="form-titleH2">Your stylish email box</h2>
      <h3 className="form-titleH3">SUBSCRIBE TO OUR NEWS LETTER</h3>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-inputEmail"
          aria-label="Input email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4 className="config-H4">CONFIGURE YOUR PREFERENCE</h4>
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="radio-group"
        >
          {chooseStyles.map((style) => (
            <RadioGroup.Option
              key={style.id}
              value={style}
              className="radio-options"
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
                  {style.text}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
        <button
          type="submit"
          className="subscribe-btn"
          aria-label="Subscribe button"
        >
          Subscribe
        </button>
        <p className="small-text">
          *Reinvent the wheel locked and loaded, so time vampire cross sabers
          note for the previous submit.
        </p>
      </form>
      <Toaster position="bottom-right" />
    </>
  );
};

export default FormNewsletter;
