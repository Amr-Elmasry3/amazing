// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import Skeleton
import ProductReviewsSkeleton from "../skeleton_components/ProductReviewsSkeleton";

// Import Custom Functions
import NameAbbreviation from "../../util/NameAbbreviation";

export default function ProductReviews({ product, isLoading }) {
  return (
    <div className="product-reviews" style={{ margin: "25px 0 0" }}>
      <h1
        className="title font-[600] text-light-navy"
        style={{ margin: "0 0 15px" }}
      >
        Reviews ({isLoading ? 0 : [...product.reviews].length})
      </h1>

      <div
        className="product-reviews-content bg-white rounded-one flex flex-col border-b-1 border-b-solid border-b-border-one max-h-[400px] overflow-y-scroll"
        style={{ padding: "15px" }}
      >
        {isLoading ? (
          <ProductReviewsSkeleton />
        ) : (
          <>
            {product.reviews.map((item, index) => {
              return (
                <div
                  className={`box flex flex-col gap-4 ${
                    index ? "border-t border-t-solid border-t-border-one" : ""
                  }`}
                  key={index}
                  style={{ padding: index ? "15px 0" : "0 0 15px" }}
                >
                  <div className="head flex items-center gap-4">
                    <span className="pic w-[45px] h-[45px] text-[14px] font-[600] text-light-navy uppercase bg-orange rounded-one flex items-center justify-center">
                      {NameAbbreviation(item.reviewerName)}
                    </span>

                    <div className="details flex flex-col gap-2">
                      <span className="name text-[15px] font-[600] capitalize text-light-navy">
                        {item.reviewerName}
                      </span>

                      <span className="date text-[13px] text-dark-gray">
                        {item.date}
                      </span>

                      <Rating
                        name="read-only"
                        value={item.rating}
                        readOnly
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                  </div>

                  <p className="comment text-[15px] text-dark-gray">
                    {item.comment}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
