import "./pages.scss";
import HeaderSlide from "../components/sliderHeader/HeaderSlide";
import About from "../components/about/About";
import Quotes from "../components/quotesComponent/Quotes";
import Featured from "../components/featured/Featured";
import Newsletter from "../components/newsleter/Newsletter";
import FixedbckImg from "../components/fixedBackground/FixedbckImg";
import { quoteOne, quoteTwo } from "../utils/quotes";


const Women = () => {
  return (
    <main className="pages-container">
     <HeaderSlide />
     <About />
     <Quotes quotes={quoteOne} />
     <Featured />
     <Quotes quotes={quoteTwo} />
     <Newsletter />
     <FixedbckImg />
    </main>
  )
}

export default Women;