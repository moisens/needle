import "./newsletter.scss";
import FormNewsletter from "../forms/FormNewsletter";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <section className="newletter-container">
      <section className="newsletter-content">
        <FormNewsletter />
      </section>
    </section>
  );
};

export default Newsletter;
