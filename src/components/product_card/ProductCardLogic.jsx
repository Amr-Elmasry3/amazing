// Import Component Ui
import ProductCardUi from "./ProductCardUi";

export default function ProductCardLogic({ product }) {
  return (
    <>
      <ProductCardUi item={product} />
    </>
  );
}
