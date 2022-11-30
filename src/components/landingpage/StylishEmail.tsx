


type Props = {}

const StylishEmail = (props: Props) => {
  return (
    <section className="stylish-container">
      <div className="stylish-content">
        {/*Create a separate component for form email*/}
      <h2>Your stylish email box</h2>
      <h3>SUBSCRIBE TO OUR NEWS LETTER</h3>
      <form>
        <label htmlFor="email" />
        <input type="email" placeholder="Enter your email" />
        <p className="config">CONFIGURE YOUR PREFERENCE</p>
        <div className="radio"></div>
        <div className="content"></div>
        <button>SUBSCRIBE</button>
        <p className="small-text">*Reinvent the wheel locked and loaded, so time vampire cross sabers note for the previous submit: the devil should be on
        the left shoulder yet we should leverage.</p>
      </form>
      </div>
      
    </section>
  )
}

export default StylishEmail