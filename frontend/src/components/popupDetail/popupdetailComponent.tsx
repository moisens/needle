import "./popup.scss";
import DetailComponent from "../singleProduct/DetailComponent";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const PopupdetailComponent = () => {
  const [popup, setPopup] = useState(false)

  const hanndlePopup = () => {
    setPopup(false) 
  }

  return (
    <section className={popup ? "popup-detail-container popup-isActive" : "popup-detail-container"}>
      <div className="popup-detail-content">
        <div className="popup-close">
          <IoClose onClick={hanndlePopup} />
        </div>
        <DetailComponent />
      </div>
    </section>
  );
};

export default PopupdetailComponent;
