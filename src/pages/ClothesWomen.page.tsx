import "../pages/pages.scss";
import Headerclothes from "../components/headers/Headerclothes";
import Clothescontainer from "../components/clothesContainer/Clothescontainer";


const ClothesWomen = () => {
  return (
    <main className="pages-container">
      <Headerclothes />
      <Clothescontainer />
    </main>
  )
}

export default ClothesWomen