import "./headerslide.scss"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import WomanInBlue from "../../assets/woman-in-blue.png"
import Button from "../button/Button";


type Props = {}

const HeaderSlide = (props: Props) => {
  return (
    <header className="header-conainer">
      <section className="header-header">
        <section className="sliders-content">
          <section className="slide-text">
            <h1 className="header-titleH1">Feel and look glamorous this spring.</h1>
            <h3 className="header-titleH3">New look, simply you.</h3>
          </section>
          <section className="slide-images">
            <img src={WomanInBlue} alt="image" title="image name" />
          </section>
        </section>
        <section className="btns-container">
          <Button as="button" className="btns-btns" handleClick={() => {}}>
            <MdOutlineKeyboardArrowLeft color="#fff" size="4rem" />
          </Button>
          <Button as="button" className="btns-btns" handleClick={() => {}}>
            <MdOutlineKeyboardArrowRight color="#fff" size="4rem" />
          </Button>
        </section>
      </section>
    </header>
  )
}

export default HeaderSlide;