import "./suggest.scss";
import FormSuggest from "../forms/FormSuggest";


type Props = {};

const Suggests = (props: Props) => {
  return (
    <section className="suggests-container">
      <section className="suggests-content">
        <h2 className="suggests-titleH2">
          You don't find anything you like or have an idea for a clothe or
          shoes?
        </h2>
        <h3 className="suggests-titleH3">
          TELL US AND WE'LL TRY TO SOLVE YOUR PROBLEM
        </h3>
        <FormSuggest />
      </section>
    </section>
  );
};

export default Suggests;
