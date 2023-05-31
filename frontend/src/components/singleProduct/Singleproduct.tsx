import "./singleproduct.scss";
import { TiArrowLeftThick } from "react-icons/ti";
import Images from "../imageComponent/Images";
import { Disclosure } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
//import { BsHeartFill } from "react-icons/bs"
import { CiHeart } from "react-icons/ci";
import { useFetchSingleProduct } from "../../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import DetailComponent from "./DetailComponent";

const Singleproduct = () => {
  const { _id } = useParams();
  const { data, status, isLoading, isError, error } =
    useFetchSingleProduct(_id);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="singlepage-container">
      <header className="singlepage-header">
        <div className="detail-back">
          <BsArrowLeft size="1.8rem" />
        </div>
        <DetailComponent />
      </header>
    </section>
  );
};

export default Singleproduct;
