// Import Components
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

export default function Details({ product, isLoading }) {
  return (
    <div
      className="details bg-white rounded-one grid grid-cols-4 gap-[30px] min-md:gap-4"
      style={{ padding: "15px" }}
    >
      <ProductImages
        images={isLoading ? [] : product.images}
        isLoading={isLoading}
      />

      <ProductInfo product={product} isLoading={isLoading} />
    </div>
  );
}
