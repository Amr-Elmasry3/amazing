// Import Component Ui
import ProductsSiderUi from "./ProductsSiderUi";

// Import Custom Hooks
import { useFetch } from "../../hooks/useFetch";

export default function ProductsSliderLogic({ title, category }) {
  const { values, isLoading } = useFetch(
    `https://dummyjson.com/products/category/${category}`
  );

  return (
    <>
      <ProductsSiderUi title={title} values={values} isLoading={isLoading} />
    </>
  );
}
