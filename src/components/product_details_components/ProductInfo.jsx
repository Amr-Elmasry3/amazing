// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import Components
import ProductActionsLogic from "../product_actions/ProductActionsLogic";

// Import Icons
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";

// Import Skeleton
import ProductDetailsSkeleton from "../skeleton_components/ProductDetailsSkeleton";

export default function ProductInfo({ product, isLoading }) {
  return (
    <div className="product-info col-span-4 min-md:col-span-2 flex flex-col  gap-[15px]">
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <>
          <div
            className="top flex flex-col  gap-[8px] border-b border-b-solid border-b-border-one"
            style={{ margin: "0 0 10px", padding: "0 0 10px" }}
          >
            <h1 className="tilte font-[600] text-light-navy">
              {product.title}
            </h1>

            <div className="price flex items-center gap-2">
              <span className="new-price text-[15px] font-[600] text-gray">
                $
                {(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}
              </span>

              <span className="old-price text-[12px] text-red line-through">
                ${product.price}
              </span>
            </div>

            <div className="rating-reviews flex items-center gap-2">
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                style={{ fontSize: "17px" }}
              />

              <span className="count-reviews text-[14px] text-gray">
                ({[...product.reviews].length} reviews)
              </span>
            </div>
          </div>

          <p className="brand flex items-center gap-[3px] text-[15px] font-[600] text-gray">
            Brand:{" "}
            <span className="text-orange capitalize">{product.brand}</span>
          </p>

          <p className="catrogry flex items-center gap-[3px] text-[15px] font-[600] text-gray">
            Category:{" "}
            <span className="text-orange capitalize">{product.category}</span>
          </p>

          <p className="availability flex items-center gap-[3px] text-[15px] font-[600] text-gray">
            Availability:{" "}
            <span className="text-orange capitalize">
              {product.availabilityStatus}
            </span>{" "}
          </p>

          <p className="tags flex items-center gap-[3px] text-[15px] font-[600] text-gray">
            Tags:{" "}
            <span className="text-orange capitalize">
              {product.tags.join(", ")}
            </span>
          </p>

          <p className="sku flex items-center gap-[3px] text-[15px] font-[600] text-gray">
            SKU: <span className="text-orange">{product.sku}</span>
          </p>

          <p className="text-[16px] font-[600] text-light-navy">
            Hurry Up! Only {product.stock} products left in stock.{" "}
          </p>

          <div className="flex flex-col gap-[4px]">
            <p className="return-policy flex items-center gap-2 capitalize text-[15px] font-[600] text-gray">
              <HiMiniArrowPath className="icon text-[18px]" />{" "}
              {product.returnPolicy}
            </p>

            <p className="available-cash flex items-center gap-2 capitalize text-[15px] font-[600] text-gray">
              <FaWallet className="icon text-[16px]" /> Cash on Deilvery
              available
            </p>
          </div>

          <div className="actions flex gap-2" style={{ margin: "10px 0 0" }}>
            <ProductActionsLogic item={product} />
          </div>
        </>
      )}
    </div>
  );
}
