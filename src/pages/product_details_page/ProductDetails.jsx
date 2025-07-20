// Import Components
import PathPage from "../../components/path_page/PathPage";
import MainHeading from "../../components/main_heading/MainHeading";
import Details from "../../components/product_details_components/Details";
import ProductDescription from "../../components/product_details_components/ProductDescription";
import ProductReviews from "../../components/product_details_components/ProductReviews";
import AddYourReview from "../../components/product_details_components/AddYourReview";
import ProductsSliderLogic from "../../components/products_slider/ProductsSliderLogic";

// Import Hooks
import { useParams } from "react-router-dom";

// Import Custom Hooks
import { useFetch } from "../../hooks/useFetch";

export default function ProductDetails() {
  const { id } = useParams();

  const { values, isLoading } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  return (
    <div className="product-details-page">
      <PathPage path="Home Product-Details" />

      <div className="content my-container">
        <MainHeading
          title="Product Details"
          subTitle="Here are all proudct details such as pictures, price, etc. with customer reviews"
        />

        <Details product={values} isLoading={isLoading} />

        <ProductDescription product={values} isLoading={isLoading} />

        <ProductReviews product={values} isLoading={isLoading} />

        <AddYourReview />

        {isLoading ? (
          ""
        ) : (
          <ProductsSliderLogic
            title="Related Products"
            category={values.category}
          />
        )}
      </div>
    </div>
  );
}
