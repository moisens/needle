import "./quotes.scss";
import Images from "../imageComponent/Images";
import { QuotesProps } from "../../types/typesQuotes";

const differentBackgroung = (color: string) => {
  if (color === "red") {
    return <section className="quotes-content-img"></section>
  } else if (color === "transparent") {
    return <section className="quotes-content-img2"></section>
  } else if (color === "lightpurple") {
    return <section className="quotes-content-img3"></section>
  } else {
    return <section className="quotes-content-img4"></section>
  }
}

const Quotes = ({ quotes }: QuotesProps) => {
  return (
    <section className="quotes-cotainer">
      {quotes.map((quot) => {
        const { id, quote, image, color } = quot;
        return (
          <section className="quotes-content" key={id}>
            <section className="quotes-big-image">
              <Images src={image} alt="lady" title="lady" />
            </section>
            <q className="quotes-quote">{quote}</q>
            {differentBackgroung(color)}
          </section>
          
        );
      })}
    </section>
  );
};

export default Quotes;
