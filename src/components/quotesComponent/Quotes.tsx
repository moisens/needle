import "./quotes.scss";
import Images from "../imageComponent/Images";
import PinkLady from "../../assets/pink-lady.png"

type Props = {};

const Quotes = (props: Props) => {
  return (
    <section className="quotes-cotainer">
      <section className="quotes-content">
        <section className="quotes-big-image">
          <Images src={PinkLady} alt="lady" title="lady" />
        </section>
        <q className="quotes-quote">Being one step ahead of the fashion trend is not so important to me.
          What matters is always moving forward - Sonia Rykiel</q>
        <section className="quotes-content-img"></section>
      </section>
    </section>
  );
};

export default Quotes;

