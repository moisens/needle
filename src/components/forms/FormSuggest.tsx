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
      />
      <label htmlFor="text-area" />
      <textarea name="" id="" cols={30} rows={10} aria-label="textarea field" />
      <button type="submit">SEND</button>
    </form>
  );
};

export default FormSuggest;
