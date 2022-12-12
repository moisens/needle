import "./quotes.scss";
import Images from "../imageComponent/Images";
import { QuotesProps } from "../../types/typesQuotes";

const getDifferentBackgroung = (color: string) => {
  if (color === "red") {
    return <section className="quotes-content-img"></section>;
  } else if (color === "transparent") {
    return <section className="quotes-content-img2"></section>;
  } else if (color === "lightpurple") {
    return <section className="quotes-content-img3"></section>;
  } else {
    return <section className="quotes-content-img4"></section>;
  }
};

const Quotes = ({ quotes }: QuotesProps) => {
  return (
    <section className="quotes-cotainer">
      {quotes.map((quot) => {
        const { id, quote, image, color } = quot;
        return (
          <section className="quotes-content" key={id}>
            <section
              className={`${
                color === "transparent" || color === "lightyellow"
                  ? "quotes-big-image big-inner-image"
                  : "quotes-big-image"
              }`}
            >
              <Images src={image} alt="product" title="product" />
            </section>
            <q className="quotes-quote">{quote}</q>
            {getDifferentBackgroung(color)}
          </section>
        );
      })}
    </section>
  );
};

export default Quotes;
