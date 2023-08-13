import SingleSlideImages from "../../components/singleProduct/SingleSlideImages";
import Images from "../../components/imageComponent/Images";
import { RiArrowDownSFill } from "react-icons/ri";
import SelectSize from "../../components/singleProduct/SelectSizeComponent";
import Button from "../../components/button/Button";
import { CiHeart } from "react-icons/ci";
import { ResponseIProducts } from "../../types/typeDatas";
import useSingleProduct from "../../hooks/useSingleProduct";
import useSelectsize from "../../hooks/useSelectSizeContext";

type SinglePageproducts = {
  data: ResponseIProducts;
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectVisibility: () => void;
  handleAddToCart: () => void;
  customClass: string;
};

const SinglepageComponent = ({
  data,
  isOn,
  //setIsOn,
  handleSelectVisibility,
  customClass,
}: SinglePageproducts) => {
  const { handleAddToCart } = useSingleProduct();
  const { chosenSize } = useSelectsize();


  const handleSelectAndUpdateSize = () => {
    const lastIndexSize = chosenSize.length - 1;
    const selectedSize = chosenSize[lastIndexSize]?.size || "Select your size";
    return selectedSize; 
  }


  

  return (
    <section className={`${customClass}-container`}>
      <div className={`${customClass}-single-content`}>
        <section className={`${customClass}-images-container`}>
          <div className={`${customClass}-slide`}>
            <SingleSlideImages {...data} />
          </div>
          <div className={`${customClass}-img`}>
            <Images
              src={data?.data.product?.image[0]}
              alt={data?.data.product?.tailorname}
              title={data?.data.product?.tailorname}
            />
          </div>
        </section>
        <article className={`${customClass}-article`}>
          <h3 className={`${customClass}-heading-3`}>
            {data?.data.product?.tailorname}
          </h3>
          <div className={`${customClass}-pricing`}>
            <h4 className={`${customClass}-heading-4`}>
              &euro; {data?.data.product?.price}
            </h4>
            <p>Includes VTA</p>
          </div>
          <p className={`${customClass}-p`}>
            <span className={`${customClass}-color`}>Color</span>:{" "}
            {data?.data.product?.color}
          </p>
          {/*//TODO: create `UniqueColor` component later!!!*/}
          <div className={`${customClass}-slide-article`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <form className={`${customClass}-size-container`}>
            <div
              className={`${customClass}-size-title`}
              onClick={handleSelectVisibility}
            >
              <p>{handleSelectAndUpdateSize()}</p>
              <RiArrowDownSFill />
            </div>
            <div className={`${customClass}-size-content`}>
              <div
                className={
                  isOn
                    ? `${customClass}-content-content isVisible`
                    : `${customClass}-content-content`
                }
              >
                <SelectSize data={data} />
              </div>
            </div>
          </form>
          <div className={`${customClass}-add-like-btns`}>
            <Button
              as="button"
              className={`${customClass}-add-btn`}
              handleClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <CiHeart size="2.5rem" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SinglepageComponent;

