import "../pages/pages.scss";
import Headerclothes from "../components/headers/Headerclothes";
import Clothescontainer from "../components/clothesContainer/Clothescontainer";
import Quotes from "../components/quotesComponent/Quotes";
import { quoteThree } from "../utils/quotes";
import Suggests from "../components/suggestions/Suggestions";

const ClothesWomen = () => {
  return (
    <main className="pages-container">
      <Headerclothes />
      <Clothescontainer />
      <Quotes quotes={quoteThree} />
      <Suggests />
    </main>
  );
};

export default ClothesWomen;
