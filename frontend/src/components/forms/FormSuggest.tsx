import "../suggestions/suggest.scss";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FormProps } from "../../types/typeForm";
import Button from "../button/Button";

const FormSuggest = () => {
  const [form, setForm] = useState<FormProps>({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [textArea, setTextArea] = useState("");

  const handleSugestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form, textArea);
    if (!form.lastname) return;
    toast.success("Suggestion submitted!");
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  return (
    <>
      <form className="form-suggest-contenair" onSubmit={handleSugestionSubmit}>
        <div className="suggest-input-names">
          <label htmlFor="firstname" />
          <input
            type="text"
            name="firstname"
            className="suggest-names"
            placeholder="First name"
            aria-label="Input firstname"
            value={form.firstname}
            onChange={handleForm}
          />
          <label htmlFor="lastname" />
          <input
            type="text"
            name="lastname"
            className="suggest-names"
            placeholder="Last name"
            aria-label="Input lastname"
            value={form.lastname}
            onChange={handleForm}
          />
        </div>
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          className="suggest-email"
          aria-label="Input email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <label htmlFor="text-area" />
        <textarea
          name="textarea"
          cols={3}
          rows={5}
          placeholder="Subject"
          aria-label="textarea field"
          value={textArea}
          onChange={handleTextArea}
        />
        <Button
          as="submit"
          className="suggest-btn"
          aria-label="Submit button with text send!"
        >
          Send
        </Button>
      </form>
      <Toaster position="bottom-right" />
    </>
  );
};

export default FormSuggest;
