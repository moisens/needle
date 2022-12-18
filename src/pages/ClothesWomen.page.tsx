import "../pages/pages.scss";
import Headerclothes from "../components/headers/Headerclothes";
import Clothescontainer from "../components/clothesContainer/Clothescontainer";
import Stories from "../components/story/Stories";
import Quotes from "../components/quotesComponent/Quotes";
import { quoteThree, quoteFour } from "../utils/quotes";
import { Outlet } from "react-router-dom";


const ClothesWomen = () => {
  return (
    <main className="pages-container">
      <Headerclothes />
      <Clothescontainer />
      <Quotes quotes={quoteThree} />
      <Stories />
      <Quotes quotes={quoteFour} />

      <Outlet />
    </main>
  )
}

export default ClothesWomen