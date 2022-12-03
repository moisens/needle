import "./pages.scss";
import HeaderSlide from "../components/sliderHeader/HeaderSlide";
import About from "../components/about/About";
import Quotes from "../components/quotesComponent/Quotes"


const Women = () => {
  return (
    <main className="pages-container">
     <HeaderSlide />
     <About />
     <Quotes />
    </main>
  )
}

export default Women;