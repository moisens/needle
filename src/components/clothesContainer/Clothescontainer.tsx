import "./clothes.scss";
import Pagescontainer from "./Pagescontainer";


import DynamicLinks from "./Links";
import Asidenav from "./Asidenav";
import FilterContainer from "./FilterContainer";



const Clothescontainer = () => {
  return (
    <section className="clothes-container">
      <section className="clothes-content">
        <DynamicLinks />
        <section className="settingsAndPage-container">
          <section className="settings-container">
            <Asidenav />
            <FilterContainer />
          </section>
          <Pagescontainer />
        </section>
      </section>
    </section>
  );
};

export default Clothescontainer;
