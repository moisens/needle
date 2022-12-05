import "../suggestions/suggest.scss";

type Props = {};

const FormSuggest = (props: Props) => {
  return (
    <form className="form-suggest-contenair">
      <div className="suggest-input-names">
        <label htmlFor="firstname" />
        <input
          type="text"
          className="suggest-names"
          placeholder="First name"
          aria-label="Input firstname"
        />
        <label htmlFor="lastname" />
        <input
          type="text"
          className="suggest-names"
          placeholder="Last name"
          aria-label="Input lastname"
        />
      </div>
      <label htmlFor="email" />
      <input
        type="email"
        name="email"
        className="suggest-email"
        aria-label="Input email"
        placeholder="Email"
      />
      <label htmlFor="text-area" />
      <textarea
        name="text-area"
        cols={3}
        rows={5}
        placeholder="Subject"
        aria-label="textarea field"
      />
      <button
        type="submit"
        className="suggest-btn"
        aria-label="Submit button with text send!"
      >
        Send
      </button>
    </form>
  );
};

export default FormSuggest;
