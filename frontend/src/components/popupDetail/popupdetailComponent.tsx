import "./popup.scss";
import DetailComponent from "../singleProduct/DetailComponent";
import { IoClose } from "react-icons/io5";

const PopupdetailComponent = () => {
  return (
    <section className="popup-detail-container">
      <div className="popup-detail-content">
        <div className="popup-close">
          <IoClose />
        </div>
        <DetailComponent />
      </div>
    </section>
  );
};

export default PopupdetailComponent;
