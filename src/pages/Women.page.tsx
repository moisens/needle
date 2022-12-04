import "./pages.scss";
import HeaderSlide from "../components/sliderHeader/HeaderSlide";
import About from "../components/about/About";
import Quotes from "../components/quotesComponent/Quotes";
import Featured from "../components/featured/Featured"


const Women = () => {
  return (
    <main className="pages-container">
     <HeaderSlide />
     <About />
     <Quotes />
     <Featured />
    </main>
  )
}

export default Women;