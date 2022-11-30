import "./pages.scss";
import Discover from "../components/landingpage/Discover";
import StylishEmail from "../components/landingpage/StylishEmail"


const LandingPage = () => {
  return (
    <main className="pages-container">
      <Discover />
      <StylishEmail />
    </main>
  )
}

export default LandingPage