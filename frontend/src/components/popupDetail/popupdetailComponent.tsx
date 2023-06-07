import "./popup.scss";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useSingleProduct from "../../hooks/useSingleProduct";
import SinglepageComponent from "../singleProduct/SinglepageComponent";
import { ResponseIProducts } from "../../types/typeDatas";

const PopupdetailComponent = () => {
  const [popup, setPopup] = useState(false);
  const {
    isOn,
    setIsOn,
    data,
    chosenSize,
    setChoseSize,
    status,
    isLoading,
    isError,
    error,
    handleSelectVisibility,
    handleAddToCart,
  } = useSingleProduct();

  const defaulClassName = "details";

  const handlePopup = () => {
    setPopup(!popup);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <section
      className={
        popup
          ? "popup-detail-container popup-isActive"
          : "popup-detail-container"
      }
    >
      <div className="popup-detail-content">
        <div className="popup-close">
          <IoClose size="1.8rem" onClick={handlePopup} />
        </div>
        {status === "success" ? (
          <SinglepageComponent
            data={data as ResponseIProducts}
            handleSelectVisibility={handleSelectVisibility}
            handleAddToCart={handleAddToCart}
            isOn={isOn}
            setIsOn={setIsOn}
            chosenSize={chosenSize}
            setChoseSize={setChoseSize}
            customClass={defaulClassName}
          />
        ) : (
          <>Fallback component with a message!</>
        )}
      </div>
    </section>
  );
};

export default PopupdetailComponent;
